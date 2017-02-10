import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from './translate.service';

//decleare customize pipe
@Pipe({
  name: 'translate',
  //update value when we change language
  pure: false
})

export class TranslatePipe implements PipeTransform {
  constructor(private _translate: TranslateService) {

  }

  transform(value: string, args: any[]): any {
    if (!value) return;
    return this._translate.instant(value);
  }
}
