import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebookComponent } from './rebook.component';

describe('RebookComponent', () => {
  let component: RebookComponent;
  let fixture: ComponentFixture<RebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
