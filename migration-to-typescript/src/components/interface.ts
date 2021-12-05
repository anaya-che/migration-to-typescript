interface ISources {
  id: string;
  name: string;
}

interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {id: string, name: string};
  title: string;
  url: string;
  urlToImage: string;
}

interface IResponse<T> {
  sources?: T[];
  articles?: T[];
  status: string | number;
  totalResults?: number;
}

interface IOptions {
  apiKey: string;
  sources?: string | undefined;
}

type Callback<T> = (data?: IResponse<T>) => void;

enum ErrorCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  TooManyRequests = 429,
  ServerError = 500
}

export {
  ISources,
  INews,
  IOptions,
  Callback,
  IResponse,
  ErrorCodes,
};
