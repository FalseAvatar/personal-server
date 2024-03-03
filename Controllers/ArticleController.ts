import { Request, Response } from "express";
import Article from "../models/Article";
import { ArticleBl } from "../BL/ArticleBL";

export class ArticleController {
  private articleBl: ArticleBl;

  constructor(articleBl: ArticleBl) {
    this.articleBl = articleBl;
  }

  async getArticle(req: Request, res: Response): Promise<void> {
    const articleId = +req.params.id;
    try {
      const result = await this.articleBl.getArticle(articleId);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async getAllArticles(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.articleBl.getAllArticles();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async addArticle(req: Request, res: Response): Promise<void> {
    const article = req.body;
    try {
      const result = await this.articleBl.addArticle(article);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async updateArticle(req: Request, res: Response): Promise<void> {
    const articleId = +req.params.id;
    const Article = req.body;
    try {
      const result = await this.articleBl.updateArticle(articleId, Article);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async deleteArticle(req: Request, res: Response): Promise<void> {
    const articleId = +req.params.id;
    try {
      const result = await this.articleBl.deleteArticle(articleId);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }
}
