import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledDivComponent } from './styled-div.component';

describe('StyledDivComponent', () => {
  let component: StyledDivComponent;
  let fixture: ComponentFixture<StyledDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyledDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
