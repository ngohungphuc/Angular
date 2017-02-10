import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public translatedText: string;
  public supportedLanguages: any[];
  constructor(private _translate: TranslateService) {

  }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' },
      { display: '华语', value: 'zh' },
    ];

    this.selectLang('es');
  }

  isCurrentLang(lang: string) {
    //check if selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    //set current lang
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    this.translatedText = this._translate.instant('hello world');
  }
}
