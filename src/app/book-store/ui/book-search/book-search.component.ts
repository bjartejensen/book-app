import { Component, EventEmitter, Output, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  //#region D.I

  private fb: FormBuilder = inject(FormBuilder);

  //#endregion

  //#region @Output

  @Output() titleEmitter = new EventEmitter<string>();

  //#endregion

  //#region Helpers

  bookSearchForm!: FormGroup;

  //#endregion

  //#region Life Cycle Hooks

  ngOnInit(): void {
    //Set up simple reactive form to handle book search queries
    this.setBookSearchForm();
  }

  //#endregion

  //#region  Private Methods

  private setBookSearchForm() {
    this.bookSearchForm = this.fb.group(
      {
        title: [],
      },
      { updateOn: 'submit' }
    );
  }

  private reset() {
    this.bookSearchForm.reset();
  }

  //#endregion

  //#region Public Methods/Event handlers

  onSubmit() {
    //Emit search query to the feature component when submit
    this.titleEmitter.emit(this.Title);
    this.reset();
  }

  //#endregion

  //#region Getters

  get Title(): string {
    return this.bookSearchForm.value.title;
  }

  //#endregion
}
