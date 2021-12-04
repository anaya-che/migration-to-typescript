import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IView } from '../interface';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sourcesElement = <HTMLElement>document.querySelector('.sources');

    sourcesElement.addEventListener('click', (e: MouseEvent) => this.controller.getNews(e, (data: IView) => this.view.drawNews(data)));
    this.controller.getSources((data: IView) => this.view.drawSources(data));
  }
}

export default App;
