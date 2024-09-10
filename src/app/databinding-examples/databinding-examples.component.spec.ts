import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingExamplesComponent } from './databinding-examples.component';

describe('DatabindingExamplesComponent', () => {
  let component: DatabindingExamplesComponent;
  let fixture: ComponentFixture<DatabindingExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabindingExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
