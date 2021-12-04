import prisma from "../prisma";
import { sign } from "jsonwebtoken";

interface StudentProps {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execulte({ email, password }: StudentProps){    
    const userExists = await prisma.user.findFirst(
      {
        where: {
          email,
          password
        } 
      }
    );
    
    if(!userExists){
      throw new Error("This user doesn' exists"); 
    }

    const token = sign(
      {}, 
      "123123", 
      { 
        expiresIn: "1d",
        subject: userExists.id
      }
    )

    return { token, userExists };
  }
}

export { AuthenticateUserService };