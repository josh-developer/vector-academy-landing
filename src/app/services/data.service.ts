import { Injectable, signal } from '@angular/core';
import { data } from './data';

@Injectable({ providedIn: 'root' })
export class DataService {
  data = signal(data);
}
