import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirectiveDirective implements OnInit{

  constructor(private el : ElementRef) {}

  @Input() Highlight :boolean = false

  ngOnInit() {
    const cells = this.el.nativeElement.querySelectorAll('td');
    cells.forEach((cell: HTMLElement) => {
      if (this.Highlight) {
        cell.style.backgroundColor = 'lightgreen'; // Couleur de surbrillance
      } else {
        cell.style.backgroundColor = 'red'; // Pas de surbrillance
      }
    });
  }


}
