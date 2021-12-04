import { Request, Response } from "express";
import { InsertStudentActivityService } from "../services/InsertStudentActivityService";

class InsertStudentActivityController {
  async handle(request: Request, response: Response){  
    const { name, list_id, called, files } = request.body;

    const InsertStudentActivity = new InsertStudentActivityService();

    try {
      const studentActivity = await InsertStudentActivity.execulte({ name, files, called, list_id });
      return response.status(200).json(studentActivity);
    } catch (error) {
      if(error instanceof Error)
        return response.json({ error: error.message });
    }

  }
}

export { InsertStudentActivityController }