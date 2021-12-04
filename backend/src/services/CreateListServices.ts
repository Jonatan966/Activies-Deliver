import prisma from "../prisma";

class CreateListService {
  async execulte(name: string, user_id: string){
    let list = await prisma.list.findFirst({ where: { name } });

    if(list){
      throw new Error("Esta lista já foi criada");
    }

    list = await prisma.list.create({
      data: {
        user_id,
        name
      }
    });

    return list.id;
  }
}

export { CreateListService };