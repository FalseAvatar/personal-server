export class Article {
  article_id: number | null;
  title: string;
  intro: string;
  article: string;

  constructor(
    post_id: number | null,
    title: string,
    intro: string,
    article: string
  ) {
    this.article_id = post_id;
    this.title = title;
    this.intro = intro;
    this.article = article;
  }
}

export default Article;
