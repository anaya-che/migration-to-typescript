import './news.css';
import { INews } from '../../interface';

class News {
  draw(data: INews[]): void {
    const news: INews[] = data.length >= 10
      ? data.filter((_item: INews, idx: number): boolean => idx < 10)
      : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');
    const newsElement = <HTMLElement>document.querySelector('.news');

    news.forEach((item: INews, idx: number): void => {
      const newsClone = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);
      const newsItem = <HTMLElement>newsClone.querySelector('.news__item');
      const newsMetaPhoto = <HTMLElement>newsClone.querySelector('.news__meta-photo');
      const newsMetaAuthor = <HTMLElement>newsClone.querySelector('.news__meta-author');
      const newsMetaDate = <HTMLElement>newsClone.querySelector('.news__meta-date');
      const newsDescriptionTitle = <HTMLElement>newsClone.querySelector('.news__description-title');
      const newsDescriptionSource = <HTMLElement>newsClone.querySelector('.news__description-source');
      const newsDescriptionContent = <HTMLElement>newsClone.querySelector('.news__description-content');
      const newsReadMore = <HTMLElement>newsClone.querySelector('.news__read-more a');

      if (idx % 2) newsItem.classList.add('alt');

      if (item.urlToImage !== 'null') newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage})`;

      if (item.author) newsMetaAuthor.textContent = item.author;
      else newsMetaAuthor.textContent = item.source.name;

      newsMetaDate.textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      newsDescriptionTitle.textContent = item.title;
      newsDescriptionSource.textContent = item.source.name;
      newsDescriptionContent.textContent = item.description;
      newsReadMore.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    newsElement.innerHTML = '';
    newsElement.appendChild(fragment);
  }
}

export default News;
