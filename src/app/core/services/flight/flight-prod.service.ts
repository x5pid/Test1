import { Injectable } from '@angular/core';
import { FlightBaseService } from './flight-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightProdService extends FlightBaseService{
  constructor() {
    super();
  }

  public override getFlights(): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
