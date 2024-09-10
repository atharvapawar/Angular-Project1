import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective {

  constructor(private elref: ElementRef) {}

  //function to get color info when mouse is entering or leaving-> color suppled to the particular
  private highlight(color: string) {
    this.elref.nativeElement.style.backgroundColor = color;
  }

  // Input to get color
  @Input('appCustomHighlight') highlightColor: string = 'wheat';

  //grabs the mouse entering event on the screen calls highlight fn with color from variables , yellow color
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

   //grabs the mouse entering event on the screen calls highlight fn with no color 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
}
