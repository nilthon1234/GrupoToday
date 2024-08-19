import { TestBed } from '@angular/core/testing';

import { VentaBoletaService } from './venta-boleta.service';

describe('VentaBoletaService', () => {
  let service: VentaBoletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaBoletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
