import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoDetailComponent } from './quarto-detail.component';

describe('QuartoDetailComponent', () => {
  let component: QuartoDetailComponent;
  let fixture: ComponentFixture<QuartoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
