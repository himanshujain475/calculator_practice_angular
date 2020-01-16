import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-calculator';
  number: number;
  arrayNumber = new Array();
  add() {
    if (this.number != null) {
      this.arrayNumber.push(this.number);
      this.arrayNumber.push("+");
    }

    this.number = null;
  }
  subtract() {
    if (this.number != null) {
      this.arrayNumber.push(this.number);
      this.arrayNumber.push("-");
    }

    this.number = null;
  }
  divide() {
    if (this.number != null) {
      this.arrayNumber.push(this.number);
      this.arrayNumber.push("/");
    }

    this.number = null;
  }
  multiply() {
    if (this.number != null) {
      this.arrayNumber.push(this.number);
      this.arrayNumber.push("*");
    }

    this.number = null;
  }
  modulus() {
    if (this.number != null) {
      this.arrayNumber.push(this.number);
      this.arrayNumber.push("%");
    }

    this.number = null;
  }
  calculateSum() {
    let checker = 0;
    if (this.number != null) {
      this.arrayNumber.push(this.number);
    }
    else {
      checker++;
      alert("If you are selecting calculate sum the box cannot be empty enter some number");
    }
    if (checker == 0) {
      let answer = 0, number;
      let i = 0;
      answer = this.arrayNumber[i];
      for (i = 1; i < this.arrayNumber.length-1; i++) {
        console.log(this.arrayNumber);
        console.log(number);
        if (i == 1) {
          number = this.arrayNumber[2];
        }
        if (i % 2 == 0) {
          number = this.arrayNumber[i+2];
        }
        else {
          if (this.arrayNumber[i] == "+") {
            answer = answer + number;
          }
          else if (this.arrayNumber[i] == "-") {
            answer = answer - number;
          }
          else if (this.arrayNumber[i] == "/") {
            answer = answer / number;
          }
          else if (this.arrayNumber[i] == "*") {
            answer = answer * number;
          }
          else if (this.arrayNumber[i] == "%") {
            answer = answer % number;
          }
        }

      }
      this.arrayNumber = new Array();
      this.number = answer;
    }

  }
  reset(){
    this.number =null;
  }

}
