import { Request, Response } from "express";
import { DeleteListServices } from "../services/DeleteListServices";

class DeleteListController {
  async handle(request: Request, response: Response){
    const { name } = request.body;
    const deleteList = new DeleteListServices();

    try {
      const deletedList = await deleteList.execulte(name);
      return response.status(200).json(deletedList);
    } catch (error) {
      if(error instanceof Error)
        return response.json({ error: error.message });
    }

  }
}

export { DeleteListController }