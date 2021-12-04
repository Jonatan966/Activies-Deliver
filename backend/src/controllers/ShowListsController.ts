import { Request, Response } from "express";
import { ShowListsService } from "../services/ShowListsService";

class ShowListsController {
  async handle(request: Request, response: Response){
    const createList = new ShowListsService();

    try {
      const allLists = await createList.execulte();
      return response.status(200).json(allLists);
    } catch (error) {
      if(error instanceof Error)
        return response.json({ error: error.message });
    }

  }
}

export { ShowListsController }