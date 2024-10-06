import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

declare const Swiper: any;

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  standalone: true,
  imports: [RouterLink],
})
export default class MainComponent implements OnInit {
  platformId = inject(PLATFORM_ID);
  dataService = inject(DataService);

  titleText = signal('');

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateTitle();
      this.swiperInit();
      AOS.init({ offset: 10 });
      AOS.refresh();
    }
  }

  swiperInit(): void {
    const swiper = new Swiper('.swiper', {
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
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
    });
  }

  animateTitle(): void {
    let index = 0;
    const title = 'Tajribani Tajribalilardan  oling!';

    const interval = setInterval(() => {
      let prefix = '';

      switch (index) {
        case 9:
          prefix = '<br/> <span class="text-gradient">';
          break;
        case 25:
          prefix = '</span> <br/>';
          break;
      }

      this.titleText.update((currTitle) => currTitle + prefix + title[index]);
      index++;

      if (index === title.length) {
        clearInterval(interval);
      }
    }, 70);
  }
}
