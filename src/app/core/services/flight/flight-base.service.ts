import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class FlightBaseService {
  constructor() { }

  public abstract getFlights(): Observable<any>;
}
