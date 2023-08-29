import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookForewordComponent } from './book-foreword.component';

describe('BookForewordComponent', () => {
  let component: BookForewordComponent;
  let fixture: ComponentFixture<BookForewordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookForewordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookForewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
