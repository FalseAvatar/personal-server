import { Request, Response } from "express";
import Post from "../models/Post";
import { PostBl } from "../BL/PostBL";

export class PostController {
  private PostBl: PostBl;

  constructor(PostBl: PostBl) {
    this.PostBl = PostBl;
  }

  async getPost(req: Request, res: Response): Promise<void> {
    const postId = +req.params.id;
    try {
      const result = await this.PostBl.getPost(postId);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.PostBl.getAllPosts();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async addPost(req: Request, res: Response): Promise<void> {
    const post = req.body;
    try {
      const result = await this.PostBl.addPost(post);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async updatePost(req: Request, res: Response): Promise<void> {
    const postId = +req.params.id;
    const post = req.body;
    try {
      const result = await this.PostBl.updatePost(postId, post);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async deletePost(req: Request, res: Response): Promise<void> {
    const postId = +req.params.id;
    try {
      const result = await this.PostBl.deletePost(postId);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }
}
