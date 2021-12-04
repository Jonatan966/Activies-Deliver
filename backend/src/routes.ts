import { Router } from "express";
const router = Router();

import { CreateListController } from "./controllers/CreateListController";
import { DeleteListController } from "./controllers/DeleteListController";
import { InsertStudentActivityController } from "./controllers/InsertStudentActivityController";
import { ShowListsController } from "./controllers/ShowListsController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ShowUserController } from "./controllers/ShowUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import authenticate from "./middlewares/authenticate";

router.post("/list", new CreateListController().handle);
router.get("/list", authenticate, new ShowListsController().handle);
router.delete("/list", new DeleteListController().handle);

router.get("/user", new ShowUserController().handle);
router.post("/user", new CreateUserController().handle);

router.post("/authenticate", new AuthenticateUserController().handle );

router.post("/studentActivity", new InsertStudentActivityController().handle);

export { router };