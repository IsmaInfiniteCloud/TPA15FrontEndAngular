import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuizComponent } from './choose-quiz.component';

describe('ChooseQuizComponent', () => {
  let component: ChooseQuizComponent;
  let fixture: ComponentFixture<ChooseQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseQuizComponent]
    });
    fixture = TestBed.createComponent(ChooseQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
