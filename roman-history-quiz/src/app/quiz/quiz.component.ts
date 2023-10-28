import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {
    questions: any[] = [];
    currentQuestionIndex: number = 0;
    currentQuestion: any;
    score: number = 0;
    TIMER_SECONDS: number = 60;
    remainingTime: number = this.TIMER_SECONDS;
    progressBarWidth: string = '0%';
    feedbackMessage: string = '';
    showFeedback: boolean = false;
    intervalId?: any;
    quizOver: boolean = false;

    constructor(private cdRef: ChangeDetectorRef, private translationService: TranslationService) {
        const storedQuestions = localStorage.getItem('questions');
        if (storedQuestions) {
            this.questions = JSON.parse(storedQuestions);
        }
    }

    ngOnInit(): void {
        this.loadQuestion();
    }

    loadQuestion(): void {
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.progressBarWidth = ((this.currentQuestionIndex + 1) / this.questions.length) * 100 + '%';
        this.showFeedback = false;
        this.startTimer();
    }

    checkAnswer(selectedIndex: number): void {
        if (selectedIndex === this.currentQuestion.answer) {
            this.score++;
            this.feedbackMessage = 'Correct!';
        } else {
            this.feedbackMessage = 'Wrong!';
        }
        this.showFeedback = true;
        clearInterval(this.intervalId);
        this.remainingTime = this.TIMER_SECONDS;
        this.cdRef.detectChanges();
        this.intervalId = setTimeout(() => {
            this.currentQuestionIndex++;
            if (this.currentQuestionIndex === this.questions.length) {
                this.quizOver = true;
            } else {
                this.loadQuestion();
            }
        }, 120000);
    }

    loadNextQuestion(): void {
        this.currentQuestionIndex++;
        this.loadQuestion();
        this.cdRef.detectChanges();
        //this.startTimer();
    }

    startTimer(): void {
        this.intervalId = setInterval(() => {
            this.remainingTime--;
            if (this.remainingTime === 0) {
                clearInterval(this.intervalId);
                this.checkAnswer(-1);
            }
        }, 1000);
    }
}
