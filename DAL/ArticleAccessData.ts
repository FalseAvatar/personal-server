import DataAccess from "./DataAccess";
import Article from "../models/Article";
import pool from "../dbPool";

export class ArticleAccessData implements DataAccess<Article> {
  async get(articleId: number): Promise<Article> {
    const query = "SELECT * FROM Articles WHERE Article_id = $1;";
    const result = await pool.query(query, [articleId]);

    if (result.rows.length === 0) {
      throw Error("No Articles exist");
    }
    console.log(result.rows[0]);
    return result.rows[0];
  }

  async getAll(): Promise<Article[]> {
    const query = "SELECT * FROM articles;";
    const result = await pool.query(query);

    if (result.rowCount === 0) {
      throw Error("No articles exist");
    }

    return result.rows;
  }

  async add(article: Article): Promise<void> {
    const query =
      "INSERT INTO Articles(title, intro, article) VALUES ($1, $2, $3);";
    await pool.query(query, [article.title, article.intro, article.article]);
  }

  async update(articleId: number, updateData: Partial<Article>): Promise<void> {
    const existingArticle = await this.get(articleId);
    // if (!existingArticle) {
    //   throw Error(`Article with id ${ArticleId} not found`);
    // }
    let query =
      "UPDATE articles SET title = $1, intro = $2, article = $3 WHERE article_id = $4";
    const values = [
      updateData.title,
      updateData.intro,
      updateData.article,
      articleId,
    ];
    await pool.query(query, values);
  }

  async delete(articleId: number): Promise<void> {
    const query = "DELETE FROM articles WHERE article_id = $1;";
    await pool.query(query, [articleId]);
  }
}
