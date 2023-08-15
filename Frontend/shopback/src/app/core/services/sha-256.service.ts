import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';


@Injectable({
  providedIn: 'root'
})
export class Sha256Service {

  constructor() { }
  sha256Password(password: string): any {
    return sha256(password);
  }
}
