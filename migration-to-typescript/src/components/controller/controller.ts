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
}

export default AppController;