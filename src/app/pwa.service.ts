import { SwPush } from '@angular/service-worker'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/*
export class PwaService {
  constructor(private swUpdate: SwUpdate) {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
    
    swUpdate.available.subscribe(event => {
      if(askUserToUpdate()) {
        window.location.reload();
      }
    });
  }
}
*/
