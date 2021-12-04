import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1e28876a4853438a9a9cfbbe3e23070b',
        });
    }
}

export default AppLoader;
