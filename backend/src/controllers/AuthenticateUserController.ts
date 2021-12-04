
import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateService";

class AuthenticateUserController {
  async handle(request: Request, response: Response){
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    try {
      const user = await authenticateUser.execulte({email, password});
      return response.status(200).json(user);
    } catch (error) {
      if(error instanceof Error)
        return response.json({ error: error.message });
    }

  }
}

export { AuthenticateUserController }