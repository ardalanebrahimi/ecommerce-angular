import { Directive, Input, TemplateRef, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdownV1]'
})
export class DropdownV1Directive {
  @Input() private set appDropdownV1(doOpen : boolean){
    if(doOpen){
      this.renderer.addClass(this.hostElement.nativeElement,'open');
    }else{      
      this.renderer.removeClass(this.hostElement.nativeElement,'open');
    }
  };

  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

}
