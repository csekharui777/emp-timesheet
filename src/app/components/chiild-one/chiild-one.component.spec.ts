import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiildOneComponent } from './chiild-one.component';

describe('ChiildOneComponent', () => {
  let component: ChiildOneComponent;
  let fixture: ComponentFixture<ChiildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiildOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
