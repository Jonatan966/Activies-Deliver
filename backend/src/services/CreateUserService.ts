interface UserProps {
  name: string;
  email: string;
  password: string;
}


class CreateUserService {

  async execulte({ name, email, password }: UserProps){

  }

}

export { CreateUserService };