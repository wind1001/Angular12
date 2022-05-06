import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') appHighLight='blue';

  constructor(private el: ElementRef) {}

  ngOnInit():void{
    console.log('ngOnInit HighlightDirective', this.appHighLight);
    this.el.nativeElement.style.color = this.appHighLight;
  }
}
