import { Request, Response } from "express";
import { ShowUserService } from "../services/ShowUserService";

class ShowUserController {
  async handle(request: Request, response: Response){
    const createList = new ShowUserService();

    try {
      const allUser = await createList.execulte();
      return response.status(200).json(allUser);
    } catch (error) {
      if(error instanceof Error)
        return response.json({ error: error.message });
    }

  }
}

export { ShowUserController }