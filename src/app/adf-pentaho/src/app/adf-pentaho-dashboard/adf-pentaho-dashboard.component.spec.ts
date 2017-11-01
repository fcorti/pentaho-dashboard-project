import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdfPentahoDashboardComponent } from './adf-pentaho-dashboard.component';

describe('AdfPentahoDashboardComponent', () => {
  let component: AdfPentahoDashboardComponent;
  let fixture: ComponentFixture<AdfPentahoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdfPentahoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdfPentahoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
