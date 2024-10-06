import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  document = inject(DOCUMENT);

  onBurgerClick(): void {
    const tham = document.querySelector('.tham');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');

    tham?.classList.toggle('tham-active');
    nav?.classList.toggle('open');
    body?.classList.toggle('fixed-body');
  }
}
