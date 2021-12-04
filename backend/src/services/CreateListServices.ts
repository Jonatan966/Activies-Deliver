import prisma from "../prisma";

class CreateListService {
  async execulte(name: string){
    let list = await prisma.list.findFirst({ where: { name } });

    if(list){
      throw new Error("Esta lista já foi criada");
    }

    list = await prisma.list.create({
      data: {
        name
      }
    });

    return list.id;
  }
}

export { CreateListService };