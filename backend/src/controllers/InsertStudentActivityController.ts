import { Request, Response } from "express";
import { InsertStudentActivityService } from "../services/InsertStudentActivityService";

class InsertStudentActivityController {
  async handle(request: Request, response: Response){
    const { list_id } = request.params;    
    const { name, numero, files } = request.body;

    const InsertStudentActivity = new InsertStudentActivityService();

    try {
      const studentActivity = await InsertStudentActivity.execulte({ name, files, numero, list_id });
      return response.status(200).json(studentActivity);
    } catch (error) {
      if(error instanceof Error)
        return response.json({ error: error.message });
    }

  }
}

export { InsertStudentActivityController }