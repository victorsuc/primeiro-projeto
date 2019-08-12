import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';

  @Input('highlight') highlightColor: string = 'yellow';

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
