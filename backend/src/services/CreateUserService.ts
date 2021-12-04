import prisma from "../prisma";

interface UserProps {
  name: string;
  email: string;
  password: string;
}


class CreateUserService {

  async execulte({ name, email, password }: UserProps){
    const userAlreadyExists = await prisma.user.findFirst({ where: { email } });


    if(userAlreadyExists){
      throw new Error("This user already exists");
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password
      }
    });

    return user;
  }

}

export { CreateUserService };