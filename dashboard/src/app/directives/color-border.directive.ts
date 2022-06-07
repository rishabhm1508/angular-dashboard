import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorBorder]'
})
export class ColorBorderDirective {
  @Input() appColorBorder:string='black';
  constructor(private el:ElementRef, private renderer:Renderer2) { 
    this.changeBorderColor(this.appColorBorder);
  }


  @HostListener('focusout') onMouseEnter() {
    this.changeBorderColor(this.appColorBorder);
  }

  private changeBorderColor(color: string) {
    this.renderer.setStyle(this.el['nativeElement'], 'border',`1px solid ${color.toLocaleLowerCase()}`);
  }

}
