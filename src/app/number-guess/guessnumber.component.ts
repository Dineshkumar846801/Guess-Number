import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guessnumber.component.html',
})
export class GuessNumber {
  @ViewChild('userInput') userInput: any;
  guessNumber: number = Math.floor(Math.random() * 101);
  message: string = '';
  yourGuesses: string[] = [];
  submit() {
    if (this.guessNumber == +this.userInput.nativeElement.value) {
      this.message = 'Congrats';
    } else if (this.guessNumber > this.userInput.nativeElement.value) {
      this.message = 'Too low!';
    } else {
      this.message = 'Too high!';
    }
    this.yourGuesses.push(`${this.userInput.nativeElement.value},`);
    this.userInput.nativeElement.value = '';
  }
}
