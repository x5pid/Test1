import { Injectable } from '@angular/core';
import { FlightBaseService } from './flight-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightDevService extends FlightBaseService {

  constructor() {
    super();
  }

  public  getFlights(): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
