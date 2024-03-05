import { DataAccess } from "../DAL/DataAccess";
import { Article } from "../models/Article";

export class ArticleBl {
  private articleDataAccess: DataAccess<Article>;

  constructor(articleDataAccess: DataAccess<Article>) {
    this.articleDataAccess = articleDataAccess;
  }

  async getArticle(id: number): Promise<Article> {
    try {
      const article = await this.articleDataAccess.get(id);
      return article;
    } catch (error) {
      throw new Error(`Article ${id} not found`);
    }
    // return await this.articleDataAccess.get(id);
  }

  async getAllArticles(): Promise<Article[]> {
    try {
      const articles = await this.articleDataAccess.getAll();
      return articles;
    } catch (error) {
      throw new Error(`Articles not found`);
    }
  }

  async addArticle(article: Article): Promise<void> {
    try {
      await this.articleDataAccess.add(article);
    } catch {
      `Article could not be added`;
    }
  }

  async updateArticle(id: number, updateData: Partial<Article>): Promise<void> {
    try {
      await this.articleDataAccess.update(id, updateData);
    } catch {
      `Article could not be updated`;
    }
  }

  async deleteArticle(id: number): Promise<void> {
    try {
      await this.articleDataAccess.delete(id);
    } catch {
      `Article could not be deleted`;
    }
  }
}
