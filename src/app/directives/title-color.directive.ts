import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitleColor]'
})

export class TitleColorDirective implements OnInit {

  @Input('appTitleColor') fontColor!: string;
  
  constructor(private elemento: ElementRef) { }
  
  ngOnInit(): void {
    this.elemento.nativeElement.style.color = this.fontColor;
  }

}