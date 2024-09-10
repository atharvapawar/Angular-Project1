import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appToggleVisibility]'
})
export class ToggleVisibilityDirective implements OnChanges {
  @Input() appToggleVisibility: boolean = false;
  
  constructor(private el: ElementRef) { }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['appToggleVisibility']) {
      this.toggleVisibility(this.appToggleVisibility);
    }
  }
  
  private toggleVisibility(appToggleVisibility: boolean) {
    if (appToggleVisibility) {
      this.el.nativeElement.style.display = 'block';
    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
