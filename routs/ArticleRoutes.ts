import express, { Request, Response } from "express";
import { ArticleController } from "../Controllers/ArticleController";
import { ArticleBl } from "../BL/ArticleBL";
import { ArticleAccessData } from "../DAL/ArticleAccessData";

const router = express.Router();
const articleController = new ArticleController(
  new ArticleBl(new ArticleAccessData())
);

router.get(
  "/",
  async (req: Request, res: Response) =>
    await articleController.getAllArticles(req, res)
);
router.get(
  "/:id",
  async (req: Request, res: Response) =>
    await articleController.getArticle(req, res)
);
router.post(
  "/",
  async (req: Request, res: Response) =>
    await articleController.addArticle(req, res)
);
router.put(
  "/:id",
  async (req: Request, res: Response) =>
    await articleController.updateArticle(req, res)
);
router.delete(
  "/:id",
  async (req: Request, res: Response) =>
    await articleController.deleteArticle(req, res)
);

export default router;
