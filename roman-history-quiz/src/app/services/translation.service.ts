import { Injectable } from '@angular/core';
import * as enTranslations from '../../assets/translation/en.json'; // Adjust the path accordingly

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any;

  loadTranslations(lang: string): Promise<any> {
    let translationData;

    switch (lang) {
      case 'en':
        translationData = enTranslations;
        break;
      // Add more cases if you have other languages
      default:
        translationData = enTranslations; // Default to English
    }

    this.setTranslations(translationData);
    return Promise.resolve(translationData);
  }

  setTranslations(data: any): void {
    this.translations = data;
  }

  translate(key: string): string {
    const keys = key.split('.');
    let result = this.translations;
    for (const k of keys) {
        if (k in result) {
            result = result[k];
        } else {
            return key;
        }
    }
    return result;
  }
}
