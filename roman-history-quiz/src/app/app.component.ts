import { Component } from '@angular/core';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  romanKingdomText?: string;

  constructor(private translationService: TranslationService) {
    console.log("Service instance in app component:", this.translationService);
  }
  ngOnInit() {
    const translatePipe = new TranslatePipe(this.translationService);
    this.romanKingdomText = translatePipe.transform('menu.romanKingdom');
    console.log("Translated text:", this.romanKingdomText);
  } 
  title = 'roman-history-quiz';
}
