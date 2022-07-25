import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTabPageComponent } from './today-tab-page.component';

describe('TodayTabPageComponent', () => {
  let component: TodayTabPageComponent;
  let fixture: ComponentFixture<TodayTabPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayTabPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
