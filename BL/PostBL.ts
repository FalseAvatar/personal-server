import { DataAccess } from "../DAL/DataAccess";
import { Post } from "../models/Post";

export class PostBl {
  private postDataAccess: DataAccess<Post>;

  constructor(postDataAccess: DataAccess<Post>) {
    this.postDataAccess = postDataAccess;
  }

  async getPost(id: number): Promise<Post> {
    // try {
    //   const post = await this.postDataAccess.get(id);
    //   return post;
    // } catch (error) {
    //   throw new Error(`post ${id} not found`);
    // }
    return await this.postDataAccess.get(id);
  }

  async getAllPosts(): Promise<Post[]> {
    try {
      const posts = await this.postDataAccess.getAll();
      return posts;
    } catch (error) {
      throw new Error(`posts not found`);
    }
  }

  async addPost(post: Post): Promise<void> {
    try {
      await this.postDataAccess.add(post);
    } catch {}
  }

  async updatePost(id: number, updateData: Partial<Post>): Promise<void> {
    try {
      await this.postDataAccess.update(id, updateData);
    } catch {}
  }

  async deletePost(id: number): Promise<void> {
    try {
      await this.postDataAccess.delete(id);
    } catch {}
  }
}
