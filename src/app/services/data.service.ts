import { Injectable, signal } from '@angular/core';
import { data, commentsData } from './data';

@Injectable({ providedIn: 'root' })
export class DataService {
  data = signal(data);
  commentsData = signal(commentsData);
}
