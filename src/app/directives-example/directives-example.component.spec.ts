import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExampleComponent } from './directives-example.component';

describe('DirectivesExampleComponent', () => {
  let component: DirectivesExampleComponent;
  let fixture: ComponentFixture<DirectivesExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesExampleComponent]
    });
    fixture = TestBed.createComponent(DirectivesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
