import prisma from "../prisma";

interface StudentProps {
  list_id: string;
  name: string;
  called: number;
  files: string;
}

class InsertStudentActivityService {

  async execulte({ name, called, files, list_id }: StudentProps){    
    const list = await prisma.list.findFirst(
      {
        where: {
          id: list_id
        },
        include: {
          students_activities: true
        }
      }
    );
    
    const studentAlreadyExistsInList = list?.students_activities.some(student => student.called === called);      

    if(studentAlreadyExistsInList){
      throw new Error("Safadinho, outro aluno já cadastrou");
    }

    const userActivity = await prisma.student.create({
      data: {
        name,
        called,
        files,
        list_id
      }
    })

    return userActivity;
  }
}

export { InsertStudentActivityService };