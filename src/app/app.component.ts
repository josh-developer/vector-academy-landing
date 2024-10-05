import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';


declare const Swiper: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {    
      this.swiperInit();
      AOS.init();
      AOS.refresh();
    }
  }

  swiperInit(): void {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      loop: true,
      grabCursor: true,
      slidesPerView: 2,
      spaceBetween: 24,
      breakpoints: {
        320: {
          slidesPerView: 1.4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      },
    });
    
  }
}
