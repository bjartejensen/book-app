import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBookPreview } from '../../models/book-store.models';
import { Observable, map } from 'rxjs';
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
    return this.httpClient.get<IBookPreview[]>(API_URL);
  }

  //#endregion
}
