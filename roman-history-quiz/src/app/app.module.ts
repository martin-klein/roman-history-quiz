import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InitQuestionsComponent } from './init/init-questions.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';


import { RomanKingdomComponent } from './roman-kingdom/roman-kingdom.component';
import { RomanRepublicComponent } from './roman-republic/roman-republic.component';
import { PrincipateComponent } from './principate/principate.component';
import { DominateComponent } from './dominate/dominate.component';
import { FallOfWesternRomanEmpireComponent } from './fall-of-western-roman-empire/fall-of-western-roman-empire.component';
import { ByzantineEmpireComponent } from './byzantine-empire/byzantine-empire.component';
import { StringsService } from './services/strings.service';
import { TranslatePipe } from './pipes/translate.pipe';

import { APP_INITIALIZER } from '@angular/core';
import { TranslationService } from './services/translation.service';

export function initTranslations(translationService: TranslationService) {
  return () => {
    // Here, 'en' is hardcoded, but you can determine the user's language and load accordingly
    return translationService.loadTranslations('en')
      .then(data => {
        console.log("Setting translations (before):", data);
        translationService.setTranslations(data);
        console.log("Setting translations (after):", data);
      });
  };
}

@NgModule({
  declarations: [
    RomanKingdomComponent,
    RomanRepublicComponent,
    PrincipateComponent,
    DominateComponent,
    FallOfWesternRomanEmpireComponent,
    ByzantineEmpireComponent,
    AppComponent,
    InitQuestionsComponent,
    QuizComponent,
    TranslatePipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initTranslations,
    deps: [TranslationService],
    multi: true
  }],
  bootstrap: [AppComponent],
  exports: [InitQuestionsComponent, TranslatePipe] // Add this line
})
export class AppModule { }
