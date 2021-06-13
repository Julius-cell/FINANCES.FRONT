import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[finErrMsge]'
})
export class ErrMsgeDirective implements OnInit {

  private _message: string = 'This field is required';

  @Input() set message(valor: string) {
    this.el.nativeElement.innerText = valor;
    this._message = valor;
  }

  @Input() set valide(valor: boolean) {
    if (valor) {
      this.el.nativeElement.classList.add('hidden');
    } else {
      this.el.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.message = this._message;
    this.setColor();
    this.setClass();
  }

  private setColor() {
    this.el.nativeElement.style.color = 'var(--pink-600)';
  }

  private setClass() {
    this.el.nativeElement.classList.add('err-text');
  }

}