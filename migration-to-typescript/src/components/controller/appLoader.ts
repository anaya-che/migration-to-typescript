import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '0a8cdb90c75e4048a77bc84d7633699f',
    });
  }
}

export default AppLoader;
