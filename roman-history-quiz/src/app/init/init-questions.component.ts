
import { Component, Inject } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './init-questions.component.html',
})
export class InitQuestionsComponent {
    feedbackMessage: string = '';

    constructor(@Inject(QuestionsService) private questionsService: QuestionsService, private router: Router) {
        console.log(this.questionsService); 
    }

    ngOnInit(): void {
        this.initializeQuestions();
        this.router.navigate(['/quiz']);
    }

    initializeQuestions(): void {
        let questions; // Create a questions variable
        this.questionsService.loadQuestions().subscribe(
            success => {
                questions = success; // Assign the result of loadQuestions() to the questions variable
                this.feedbackMessage = 'Questions initialized successfully. You can now run the quiz application.';
                console.log(questions);
            },
            error => {
                this.feedbackMessage = 'Error initializing questions: ' + error.message;
                console.log(this.feedbackMessage);
            }
        );
    }
}
