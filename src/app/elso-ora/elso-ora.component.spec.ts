import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsoOraComponent } from './elso-ora.component';

describe('ElsoOraComponent', () => {
  let component: ElsoOraComponent;
  let fixture: ComponentFixture<ElsoOraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElsoOraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElsoOraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
