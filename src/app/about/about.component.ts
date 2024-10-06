import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { DataService } from '../services/data.service';
import { Course } from '../models/models';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  standalone: true,
})
export default class AboutComponent implements OnInit {
  platformId = inject(PLATFORM_ID);
  route = inject(ActivatedRoute);
  dataService = inject(DataService);

  item = signal<Course | undefined>(undefined);

  ngOnInit(): void {
    this.item.set(
      this.dataService
        .data()
        .find((course) => course.id === this.route.snapshot.params['id'])
    );

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
      AOS.init();
      AOS.refresh();
    }
  }

  getImageGrids(): string {
    const length = this.item()?.mentor?.prevCompanies.length!;
    if ([1, 2, 3, 4].includes(length)) return 'grid-cols-2';
    if (length > 4) return 'grid-cols-3';
    else return 'grid-cols-3';
  }
}
