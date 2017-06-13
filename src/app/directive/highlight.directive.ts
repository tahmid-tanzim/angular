import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') mouseunder(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
