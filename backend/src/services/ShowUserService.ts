import prisma from "../prisma";

class ShowUserService {
  async execulte(){
    return await prisma.user.findMany(
      { 
        include: 
        { 
          lists: 
          { 
            include: 
              { 
                students_activities: true 
              } 
          }
        } 
      }
    );
  }
}

export { ShowUserService };