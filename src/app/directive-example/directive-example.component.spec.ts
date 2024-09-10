import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExampleComponent } from './directive-example.component';

describe('DirectiveExampleComponent', () => {
  let component: DirectiveExampleComponent;
  let fixture: ComponentFixture<DirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectiveExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
