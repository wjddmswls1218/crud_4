import express from "express";
import {
  authorCreateController,
  authorDetailController,
  authorViewController,
  bookCreateController,
  bookDetailController,
  bookViewController,
  postCreateAuthorController,
} from "../controllers/adminController";

const adminRouter = express.Router();

// author
adminRouter.get("/authorManagement", authorViewController);
adminRouter.get("/authorManagement/create", authorCreateController);
adminRouter.get("/authorManagement/:id", authorDetailController);

adminRouter.post("/postCreateAuthor", postCreateAuthorController);

// book
adminRouter.get("/bookManagement", bookViewController);
adminRouter.get("/bookManagement/create", bookCreateController);
adminRouter.get("/bookManagement/:id", bookDetailController);

export default adminRouter;
