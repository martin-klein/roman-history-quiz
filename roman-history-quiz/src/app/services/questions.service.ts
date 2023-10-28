
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class QuestionsService {
    private questionsUrl = 'http://localhost:8000/questions.json';

    constructor(private http: HttpClient) {}

    loadQuestions(): Observable<any> {
        console.log('getQuestions called'); // Add this line
        return this.http.get<any>(this.questionsUrl).pipe(
            tap(questions => {
                localStorage.setItem('questions', JSON.stringify(questions));
            }),
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('An error occurred:', error);
        return throwError(error.message || 'Server error');
    }
}
