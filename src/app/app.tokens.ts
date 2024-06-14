import { InjectionToken } from "@angular/core";
import { Environment } from "./shared/models/enviroment.model";

export const ENV_CONFIG = new InjectionToken<Environment>('Environment');
