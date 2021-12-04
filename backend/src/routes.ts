import { Router } from "express";
const router = Router();

import { CreateListController } from "./controllers/CreateListController";
import { DeleteListController } from "./controllers/DeleteListController";
import { InsertStudentActivityController } from "./controllers/InsertStudentActivityController";
import { ShowListsController } from "./controllers/ShowListsController";

router.post("/list", new CreateListController().handle);
router.get("/list", new ShowListsController().handle);
router.delete("/list", new DeleteListController().handle);

router.post("/studentActivity/:list_id", new InsertStudentActivityController().handle);

export { router };