export interface IBookCover {
  title: string;
  subTitle: string;
  teaserText: string;
  authors: string[];
}

export interface IBookDetails {
  publisher: string;
  publisherLogo?: string;
  isbn: string;
  publishedYear: number;
}

export type TBookContentItem = {
  idx: number;
  title: string;
  subTitle: string;
  pageNumber: number;
};

export interface IBookContent {
  bookContentItems: TBookContentItem[];
}

export interface IBookForeword {
  header: string;
  content: string;
}

/**
 * @description Main Book instance
 */
export interface IBookPreview {
  cover: IBookCover;
  details: IBookDetails;
  content: IBookContent;
  foreword?: IBookForeword;
}
