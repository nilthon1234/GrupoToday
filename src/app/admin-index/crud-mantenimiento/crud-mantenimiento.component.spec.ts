import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMantenimientoComponent } from './crud-mantenimiento.component';

describe('CrudMantenimientoComponent', () => {
  let component: CrudMantenimientoComponent;
  let fixture: ComponentFixture<CrudMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudMantenimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
