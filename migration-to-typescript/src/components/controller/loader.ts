import {
  IOptions, Callback, IResponse, ISources, INews, ErrorCodes,
} from '../interface';

class Loader {
  baseLink: string;

  options: IOptions;

  constructor(baseLink: string, options: IOptions) {
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

  errorHandler(res: Response): Response {
    if (res.status !== ErrorCodes.OK) {
      if (res.status === ErrorCodes.Unauthorized || res.status === ErrorCodes.NotFound) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Partial<IOptions>, endpoint: string): string {
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
    callback: Callback<ISources | INews>,
    options: Partial<IOptions> = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response): Promise<IResponse<ISources | INews>> => res.json())
      .then((data: IResponse<ISources | INews>): void => callback(data))
      .catch((err: string): void => console.error(err));
  }
}

export default Loader;
