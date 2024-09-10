import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
@Directive({
  selector: '[appToggleVisibility]'
})
export class ToggleVisibilityDirective implements OnChanges {
@Input() appToggleVisibility:boolean=false;
//display:none--> hide, display:block --->show
  constructor(private el:ElementRef) { }
  //automatically called whenever there is changes occuring on app - button, form input, hover
  ngOnChanges(changes:SimpleChanges){
    if(changes['appToggleVisibility']){
      //function to do the changes - show/hide
      this.toggleVisibility(this.appToggleVisibility);
    }
  }
  toggleVisibility(appToggleVisibility:boolean){
    if(appToggleVisibility){
      this.el.nativeElement.style.display="block";
      this.el.nativeElement.style.backgroundColor="pink";
      this.el.nativeElement.style.border="1px solid brown";
    }else{
      this.el.nativeElement.style.display="none";
    }
  }
}
