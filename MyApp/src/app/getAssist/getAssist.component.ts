import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getAssist',
  templateUrl: './getAssist.component.html',
  styleUrls: ['./getAssist.component.css']
})
export class getAssist {
  userInput: string = '';
  searchResult: any;

  constructor(private http: HttpClient) {}

  search() {
    const requestData = {
      title: this.userInput
     
    };

    this.http.post<any>('http://localhost:3000/search', requestData).subscribe(
      (response) => {
        this.searchResult = response;
        console.log(this.searchResult);
      },
      (error) => {
        console.error('Error:', error);
        // Handle error
      }
    );
  }
}
