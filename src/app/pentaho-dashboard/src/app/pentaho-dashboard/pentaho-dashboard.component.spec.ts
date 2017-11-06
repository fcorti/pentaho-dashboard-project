import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PentahoDashboardComponent } from './pentaho-dashboard.component';

describe('PentahoDashboardComponent', () => {
  let component: PentahoDashboardComponent;
  let fixture: ComponentFixture<PentahoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PentahoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PentahoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
