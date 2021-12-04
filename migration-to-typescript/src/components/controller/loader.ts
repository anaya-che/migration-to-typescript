import { IOptions } from '../interface';

class Loader {
  baseLink: string;

  options: { apiKey: string };

  constructor(baseLink: string, options: { apiKey: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: {} | undefined; },
    callback: () => void = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: IOptions, endpoint: string) {
    const urlOptions: IOptions = { ...this.options, ...options };

    let url: string = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: string,
    endpoint: string,
    callback: any,
    options: IOptions = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err: string) => console.error(err));
  }
}

export default Loader;
