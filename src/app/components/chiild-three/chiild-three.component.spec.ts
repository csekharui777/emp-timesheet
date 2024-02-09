import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiildThreeComponent } from './chiild-three.component';

describe('ChiildThreeComponent', () => {
  let component: ChiildThreeComponent;
  let fixture: ComponentFixture<ChiildThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiildThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiildThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
