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

interface IView {
  sources?: ISources[];
  articles?: INews[];
}

interface IOptions {
  apiKey?: string;
  sources?: string | undefined;
}

export {
  ISources,
  INews,
  IView,
  IOptions,
};
