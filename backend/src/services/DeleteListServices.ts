import prisma from "../prisma";

class DeleteListServices {
  async execulte(name: string){
    let list = await prisma.list.findFirst({ where: { name } });

    if(!list){
      throw new Error("Esta lista não foi criada");
    }

    await prisma.list.delete({ where: { name } });
  }
}

export { DeleteListServices };