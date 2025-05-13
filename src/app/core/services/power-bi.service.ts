import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as powerbi from 'powerbi-client';

@Injectable({
  providedIn: 'root'
})
export class PowerBiService {

  // private powerbiService: any;
  // private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // this.isBrowser = isPlatformBrowser(this.platformId);
    // if(this.isBrowser){
    //   this.powerbiService = new powerbi.service.Service(
    //     powerbi.factories.hpmFactory,
    //     powerbi.factories.wpmpFactory,
    //     powerbi.factories.routerFactory
    //   );
    // }
  }

  embedReport(container: HTMLElement, embedUrl: string): void {
    container.innerHTML = `
      <iframe
        width="100%"
        height="100%"
        src="${embedUrl}"
        frameborder="0"
        allowFullScreen="true"
        style="display: block; border: none;">
      </iframe>
    `;
  }

  // reset(container: HTMLElement): void {
  //   this.powerbiService.reset(container);
  // }
}
