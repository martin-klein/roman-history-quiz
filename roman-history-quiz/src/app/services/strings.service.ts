
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StringsService {

  private stringsUrl = 'assets/strings.json';
  public strings: any;

  constructor(private http: HttpClient) { 
    this.loadStrings();
  }

  loadStrings(): void {
    this.http.get(this.stringsUrl).subscribe(data => {
      this.strings = data;
    });
  }

  getString(key: string): string {
    return this.strings ? this.strings[key] : key;
  }
}
