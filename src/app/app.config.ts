import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FlightBaseService } from './core/services/flight/flight-base.service';
import { environment } from '../environments/environment';
import { FlightProdService } from './core/services/flight/flight-prod.service';
import { FlightDevService } from './core/services/flight/flight-dev.service';
import { ENV_CONFIG } from './app.tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ENV_CONFIG, useValue: environment },
    { provide: FlightBaseService, useClass: environment.production ? FlightProdService : FlightDevService  },
    provideRouter(routes)
  ]
};
