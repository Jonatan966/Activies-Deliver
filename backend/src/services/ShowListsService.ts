import prisma from "../prisma";

class ShowListsService {
  async execulte(){
    return await prisma.list.findMany({ include: { students_activities: true } });
  }
}

export { ShowListsService };