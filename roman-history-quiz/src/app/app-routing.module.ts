import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitQuestionsComponent } from './init/init-questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { RomanKingdomComponent } from './roman-kingdom/roman-kingdom.component';
import { RomanRepublicComponent } from './roman-republic/roman-republic.component';
import { PrincipateComponent } from './principate/principate.component';
import { DominateComponent } from './dominate/dominate.component';
import { FallOfWesternRomanEmpireComponent } from './fall-of-western-roman-empire/fall-of-western-roman-empire.component';
import { ByzantineEmpireComponent } from './byzantine-empire/byzantine-empire.component';

const routes: Routes = [
  { path: '', component: InitQuestionsComponent },
  { path: 'roman-kingdom', component: RomanKingdomComponent },
  { path: 'roman-republic', component: RomanRepublicComponent },
  { path: 'principate', component: PrincipateComponent },
  { path: 'dominate', component: DominateComponent },
  { path: 'fall-of-western-roman-empire', component: FallOfWesternRomanEmpireComponent },
  { path: 'byzantine-empire', component: ByzantineEmpireComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }