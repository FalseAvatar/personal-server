import DataAccess from "./DataAccess";
import Post from "../models/Post";
import pool from "../dbPool";

export class PostAccessData implements DataAccess<Post> {
  async get(postId: number): Promise<Post> {
    const query = "SELECT * FROM posts WHERE post_id = $1;";
    const result = await pool.query(query, [postId]);

    // if (result.rows.length === 0) {
    //   throw Error("No posts exist");
    // }
    console.log(result.rows[0]);
    return result.rows[0];
  }

  async getAll(): Promise<Post[]> {
    const query = "SELECT * FROM posts;";
    const result = await pool.query(query);

    if (result.rowCount === 0) {
      throw Error("No posts exist");
    }

    return result.rows;
  }

  async add(post: Post): Promise<void> {
    const query =
      "INSERT INTO posts(title, intro, article) VALUES ($1, $2, $3);";
    await pool.query(query, [post.title, post.intro, post.article]);
  }

  async update(postId: number, updateData: Partial<Post>): Promise<void> {
    const existingPost = await this.get(postId);
    // if (!existingPost) {
    //   throw Error(`Post with id ${postId} not found`);
    // }
    let query =
      "UPDATE posts SET title = $1, intro = $2, article = $3 WHERE post_id = $4";
    const values = [
      updateData.title,
      updateData.intro,
      updateData.article,
      postId,
    ];
    await pool.query(query, values);
  }

  async delete(postId: number): Promise<void> {
    const query = "DELETE FROM posts WHERE post_id = $1;";
    await pool.query(query, [postId]);
  }
}
