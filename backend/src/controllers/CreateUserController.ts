import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response){
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    try {

      const user = await createUser.execulte({ email, name, password });
      return response.status(200).json(user);

    } catch (error) {

      if(error instanceof Error)
        return response.json({ error: error.message });

    }

  }
}

export { CreateUserController }