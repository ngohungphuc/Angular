import {Injectable, Inject} from '@angular/core';
import {TRANSLATIONS} from './translation';

@Injectable()
export class TranslateService {
  private _currentLang: string;

  public get currentLang() {
    return this._currentLang;
  }

  //inject translations token
  constructor( @Inject(TRANSLATIONS) private _translations: any) {

  }

  public use(lang: string): void {
    //set current lang
    this._currentLang = lang;
  }

  private translate(key: string): string {
    //private perform translations
    let translation = key;

    if (this._translations[this._currentLang] && this._translations[this._currentLang][key]) {
      return this._translations[this._currentLang][key];
    }

    return translation;
  }

  public instant(key: string) {
    //call translation
    return this.translate(key);
  }
}
