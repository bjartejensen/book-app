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
            title: 'The Dawn of Everything',
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
          content: {
            bookContentItems: [
              {
                idx: 1,
                title: "Farewell to Humanity's Childhood",
                subTitle:
                  'Or why this book is not a book about the origin of inequality',
                pageNumber: 1,
              },
              {
                idx: 2,
                title: "Farewell to Humanity's Childhood",
                subTitle:
                  'Or why this book is not a book about the origin of inequality',
                pageNumber: 61,
              },
              {
                idx: 3,
                title: "Farewell to Humanity's Childhood",
                subTitle:
                  'Or why this book is not a book about the origin of inequality',
                pageNumber: 112,
              },
            ],
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything',
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
          content: {
            bookContentItems: [
              {
                idx: 1,
                title: "Farewell to Humanity's Childhood",
                subTitle:
                  'Or why this book is not a book about the origin of inequality',
                pageNumber: 1,
              },
            ],
          },
        },
        {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-3',
            publishedYear: 2021,
            publisher: 'Penguine Books',
            publisherLogo: 'start_rate_half',
          },
          content: {
            bookContentItems: [
              {
                idx: 1,
                title: "Farewell to Humanity's Childhood",
                subTitle:
                  'Or why this book is not a book about the origin of inequality',
                pageNumber: 1,
              },
            ],
          },
        },
      ]);
    }

    console.log('GOT HERE? jsonserver');

    return this.httpClient.get<IBookPreview[]>(API_URL);
  }

  //#endregion
}
