import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'grey';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseunder(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
