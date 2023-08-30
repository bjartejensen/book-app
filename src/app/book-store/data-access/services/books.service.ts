import { Injectable, inject, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBookPreview } from '../../models/book-store.models';
import { Observable, of } from 'rxjs';
import { API_URL } from '../../models/book-store.constants';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  //#region D.I.

  private httpClient = inject(HttpClient);

  //#endregion

  //#region Public Methods

  fetchBooks(): Observable<IBookPreview[]> {
    if (!isDevMode()) {
      console.log('GOT HERE? raw');

      return of([
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 1',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-1',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'bookmark',
          },
          foreword: {
            header: 'Foreword and Dedication (by David Wengrow)',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio illum tempora iusto nam, similique modi et ab impedit a dignissimos reiciendis.',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 2',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-2',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'import_contacts',
          },
          foreword: {
            header: 'Foreword and Dedication (by David Wengrow)',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio illum tempora iusto nam, similique modi et ab impedit a dignissimos reiciendis.',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 3',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-3',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 4',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-4',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 5',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-5',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 6',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-6',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 7',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-7',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 8',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-8',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 9',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-9',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything 10',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-10',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
        },
      ]);
    }

    console.log('GOT HERE? jsonserver');

    return this.httpClient.get<IBookPreview[]>(API_URL);
  }

  //#endregion
}
