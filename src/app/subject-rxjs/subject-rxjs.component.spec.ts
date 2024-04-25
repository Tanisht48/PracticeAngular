import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRXJSComponent } from './subject-rxjs.component';

describe('SubjectRXJSComponent', () => {
  let component: SubjectRXJSComponent;
  let fixture: ComponentFixture<SubjectRXJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectRXJSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectRXJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
