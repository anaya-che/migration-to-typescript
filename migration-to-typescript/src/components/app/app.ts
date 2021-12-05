import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IResponse, ISources, INews } from '../interface';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sourcesElement = <HTMLElement>document.querySelector('.sources');

    sourcesElement.addEventListener('click', (e: MouseEvent): void => this.controller.getNews(e, (data: IResponse<INews> | undefined) => {
      if (data !== undefined) this.view.drawNews(data);
    }));
    this.controller.getSources((data: IResponse<ISources> | undefined) => {
      if (data !== undefined) this.view.drawSources(data);
    });
  }
}

export default App;
