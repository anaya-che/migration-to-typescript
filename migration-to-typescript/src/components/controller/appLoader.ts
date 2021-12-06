import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '1e28876a4853438a9a9cfbbe3e23070b',
    });
  }
}

export default AppLoader;
