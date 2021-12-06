import AppLoader from './appLoader';
import {
  Callback, ISources, INews,
} from '../interface';

class AppController extends AppLoader {
  getSources(callback: Callback<ISources>): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  getNews(e: MouseEvent, callback: Callback<INews>): void {
    let target = <HTMLElement>e.target;
    const newsContainer = <HTMLElement>e.currentTarget;
    this.addActiveButton(e);

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = <string>target.getAttribute('data-source-id');

        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      target = <HTMLElement>target.parentNode;
    }
  }

  addActiveButton(e: MouseEvent): void {
    const target = <HTMLElement>e.target;
    const closest = <HTMLElement>target.closest('.source__item');
    if (closest) {
      const buttonElements: NodeList = document.querySelectorAll('.source__item');

      buttonElements.forEach((el: Node) => {
        const item = <HTMLElement>el;
        if (item.classList.contains('active')) item.classList.remove('active');
      });

      closest.classList.add('active');
    }
  }
}

export default AppController;
