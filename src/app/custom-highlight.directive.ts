import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective {
  //create an object for ElementRef - DOM class
  constructor(private elRef: ElementRef) {  }
  //Input to get Color from html
  @Input('appCustomHighlight') highlightColor:string='';
  //function to get color info when mouse is entering or leaving-> color supploed to the particular element
  private highlight(color:string){
    this.elRef.nativeElement.style.backgroundColor=color;
  }
  //grabs the mouse entering event on the screen - calls highlight fn with color from variable, yellow
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor||'yellow');
  }
  //grabs the mouse leVING event on the screen - calls highlight fn with no color 
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }
}
