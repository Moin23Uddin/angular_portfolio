import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[collapseToggle]'
})
export class CollapseToggleDirective {
  @Input() isCollapsed: boolean = true;
  @Input() isCollapsedOne: boolean = true;
  @Input() isCollapsedTwo: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.isCollapsed;
    this.isCollapsedOne;
  }

  ngOnChanges() {
    if (!this.isCollapsed) {
      this.removeHoverStyles();
    }
    else if(this.isCollapsedOne) {
      this.removeHoverStyles();
    }
    else if(this.isCollapsedTwo) {
      this.removeHoverStyles();
    }
  }


  @HostListener('mouseenter')
  onMouseEnter() {

    if (this.isCollapsed) {
      this.renderer.setStyle(this.el.nativeElement, 'transition', '0.6s');
      this.renderer.setStyle(
        this.el.nativeElement,
        'background',
        'linear-gradient(to right, transparent 0%, #65666fad, #beb7ba7d)'
      );
    }
    else if(!this.isCollapsedOne) {
      this.renderer.setStyle(this.el.nativeElement, 'transition', '0.6s');
      this.renderer.setStyle(
        this.el.nativeElement,
        'background',
        'linear-gradient(to right, transparent 0%, #65666fad, #beb7ba7d)'
      );
    }
    else if(!this.isCollapsedTwo) {
      this.renderer.setStyle(this.el.nativeElement, 'transition', '0.6s');
      this.renderer.setStyle(
        this.el.nativeElement,
        'background',
        'linear-gradient(to right, transparent 0%, #65666fad, #beb7ba7d)'
      );
    }

  }
  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isCollapsed) {
      this.removeHoverStyles();
    }
    else if(!this.isCollapsedOne) {
      this.removeHoverStyles();
    }
    else if(!this.isCollapsedTwo) {
      this.removeHoverStyles();
    }

  }

  private removeHoverStyles() {
    this.renderer.removeStyle(this.el.nativeElement, 'transition');
    this.renderer.removeStyle(this.el.nativeElement, 'background');
  }
}
