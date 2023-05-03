import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any){
    // console.log(val,type);
    type == 'number' ? this.onNumberClick(val) : this.onFunctionClick(val);
  }

  onNumberClick(val: string){
    if(this.calNumber != 'noValue'){
      console.log(this.calNumber)
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
    console.log(this.calNumber)
  }

  onFunctionClick(val: string){
    // console.log("on function")

    // call the clear all method
    if(val == 'C') {
      console.log(this.funcT, 'funct')
      this.clearAll();
    }
    else if(this.funcT == 'NoFunction'){
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
    else if(this.funcT != 'NoFunction'){
      this.secondNumber = this.calValue;

      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string){
    if(this.funcT == '+'){
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
      if(val == '=') { this.onEqualClick() }
    } else if(this.funcT == '-'){
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(total, val);
      if(val == '=') { this.onEqualClick() }
    }
    else if(this.funcT == '*'){
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(total, val);
      if(val == '=') { this.onEqualClick() }
    }
    else if (this.funcT == '/'){
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total, val);
      if(val == '=') { this.onEqualClick() }
    }
    else if (this.funcT == '%'){
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(total, val);
      if(val == '=') { this.onEqualClick() }
    }

  }

  totalAssignValues(total : number, val: string){
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }

  onEqualClick() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }

  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }

}
