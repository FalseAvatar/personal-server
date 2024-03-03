import express, { Request, Response } from "express";
import { PostController } from "../Controllers/PostController";
import { PostBl } from "../BL/PostBL";
import { PostAccessData } from "../DAL/PostAccessData";

const router = express.Router();
const postController = new PostController(new PostBl(new PostAccessData()));

router.get(
  "/",
  async (req: Request, res: Response) =>
    await postController.getAllPosts(req, res)
);
router.get(
  "/:id",
  async (req: Request, res: Response) => await postController.getPost(req, res)
);
router.post(
  "/",
  async (req: Request, res: Response) => await postController.addPost(req, res)
);
router.put(
  "/:id",
  async (req: Request, res: Response) =>
    await postController.updatePost(req, res)
);
router.delete(
  "/:id",
  async (req: Request, res: Response) =>
    await postController.deletePost(req, res)
);

export default router;