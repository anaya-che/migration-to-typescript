import News from './news/news';
import Sources from './sources/sources';
import { ISources, INews, IResponse } from '../interface';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IResponse<INews>): void {
    const values: INews[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IResponse<ISources>): void {
    const values: ISources[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
