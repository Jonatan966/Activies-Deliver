import prisma from "../prisma";

interface StudentProps {
  list_id: string;
  name: string;
  numero: number;
  files: string;
}

class InsertStudentActivityService {

  async execulte({ name, numero, files, list_id }: StudentProps){    
    const list = await prisma.list.findFirst(
      {
        where: {
          id: list_id
        },
        include: {
          Student: true
        }
      }
    );
    
    const studentAlreadyExistsInList = list?.Student.some(student => student.numero === numero);      

    if(studentAlreadyExistsInList){
      throw new Error("Safadinho, outro aluno já cadastrou");
    }

    const userActivity = await prisma.student.create({
      data: {
        name,
        numero,
        files,
        listId: list_id,
      }
    })

    return userActivity;
  }
}

export { InsertStudentActivityService };