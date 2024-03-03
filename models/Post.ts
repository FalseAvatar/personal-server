export class Post {
  post_id: number | null;
  title: string;
  intro: string;
  article: string;

  constructor(
    post_id: number | null,
    title: string,
    intro: string,
    article: string
  ) {
    this.post_id = post_id;
    this.title = title;
    this.intro = intro;
    this.article = article;
  }
}

export default Post;
