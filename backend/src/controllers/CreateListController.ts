import { Request, Response } from "express";
import { CreateListService } from "../services/CreateListServices";

class CreateListController {
  async handle(request: Request, response: Response){
    const { name, user_id } = request.body;

    const createList = new CreateListService();

    try {
      const idList = await createList.execulte(name, user_id);
      return response.status(200).json(idList);
    } catch (error) {
      if(error instanceof Error)
        return response.json({ error: error.message });
    }

  }
}

export { CreateListController }