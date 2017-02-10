import {OpaqueToken} from '@angular/core';
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './lang-es';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from './lang-zh';

// translation token
// We created an opaque token called translations. An opaque token is an object with no application interfaces
export const TRANSLATIONS = new OpaqueToken('translations');

//dictionary variable links all our translations
const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_ES_NAME]: LANG_ES_TRANS,
  [LANG_ZH_NAME]: LANG_ZH_TRANS,
};

//providers
//TRANSLATION_PROVIDERS notes that we use the opaque token that we defined earlier, and supply our dictionary as value.
//TRANSLATION_PROVIDERS Later we will register TRANSLATION_PROVIDERS during bootstrap (main.ts).
export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary }
];
