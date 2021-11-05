import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundownOverviewComponent } from './sundown-overview.component';

describe('SundownOverviewComponent', () => {
  let component: SundownOverviewComponent;
  let fixture: ComponentFixture<SundownOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SundownOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SundownOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
