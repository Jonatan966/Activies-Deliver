import prisma from "../prisma";

class ShowListsService {
  async execulte(){
    return await prisma.list.findMany({ include: { Student: true } });
  }
}

export { ShowListsService };