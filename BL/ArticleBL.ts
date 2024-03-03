import { DataAccess } from "../DAL/DataAccess";
import { Article } from "../models/Article";

export class ArticleBl {
  private articleDataAccess: DataAccess<Article>;

  constructor(articleDataAccess: DataAccess<Article>) {
    this.articleDataAccess = articleDataAccess;
  }

  async getArticle(id: number): Promise<Article> {
    // try {
    //   const Article = await this.articleDataAccess.get(id);
    //   return Article;
    // } catch (error) {
    //   throw new Error(`Article ${id} not found`);
    // }
    return await this.articleDataAccess.get(id);
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
    } catch {}
  }

  async updateArticle(id: number, updateData: Partial<Article>): Promise<void> {
    try {
      await this.articleDataAccess.update(id, updateData);
    } catch {}
  }

  async deleteArticle(id: number): Promise<void> {
    try {
      await this.articleDataAccess.delete(id);
    } catch {}
  }
}