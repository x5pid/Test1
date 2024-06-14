import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV_CONFIG } from '../../../app.tokens';
import { Environment } from '../../../shared/models/enviroment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected get apiUrl() {  return this._env.backendServer; };

  constructor(
    @Inject(ENV_CONFIG) private _env: Environment,
    protected http: HttpClient,
    protected endpoint : string,
  ) { }

}
