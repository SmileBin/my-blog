import { Injectable } from '@angular/core';
import { scriptStore } from './script-loader';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

declare var document: any;

@Injectable()
export class ScriptLoaderService {

  private scripts: any = [];

  public load(script: ScriptModel): Observable<any> {
    return new Observable<ScriptModel>(observer => {
      // console.log('loading script');
      const existingScript = this.scripts.find(s => s.name === script.name);

      // Complete if already loaded
      if (existingScript && existingScript.loaded) {
        observer.next(existingScript);
        observer.complete();
      } else {
        // Add the script
        this.scripts = [...this.scripts, script];

        // Load the script
        const scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = script.src;

        scriptElement.onload = (val) => {
          console.log('val', val, scriptElement);
          script.loaded = true;
          observer.next(script);
          observer.complete();
        };

        scriptElement.onerror = (error: any) => {
          observer.error('Couldn\'t load script ' + script.src);
        };

        document.querySelector('body').appendChild(scriptElement);
      }
    });
  }
}


export interface ScriptModel {
  name: string,
  src: string,
  loaded: boolean
}
