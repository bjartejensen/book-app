import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentItemComponent } from './book-content-item.component';

describe('BookContentItemComponent', () => {
  let component: BookContentItemComponent;
  let fixture: ComponentFixture<BookContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookContentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
