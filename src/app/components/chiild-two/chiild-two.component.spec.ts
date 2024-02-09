import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiildTwoComponent } from './chiild-two.component';

describe('ChiildTwoComponent', () => {
  let component: ChiildTwoComponent;
  let fixture: ComponentFixture<ChiildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiildTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
