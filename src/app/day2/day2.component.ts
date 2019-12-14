import { Component, OnInit } from '@angular/core';
import { Intcode } from './intcode';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.scss']
})
export class Day2Component implements OnInit {

  intcode: number[] = Intcode;
  solution: number;

  ngOnInit() {
    this.intcode[1] = 12;
    this.intcode[2] = 2;

    this.intcode = compute(Intcode);
    this.solution = this.intcode[0];
  }
}

function compute(intcode: number[]): number[] {
  let index: number = 0;
  let value1Pos = 0
  let value2Pos = 0;
  let savePos: number = 0;

  while (intcode[index] !== 99 && intcode[index] != NaN && intcode[index] != null) {
    if (intcode[index] === 1) {
      value1Pos = intcode[index + 1];
      value2Pos = intcode[index + 2];
      savePos = intcode[index + 3];
      intcode[savePos] = intcode[value1Pos] + intcode[value2Pos];
    }
    else if (intcode[index] === 2) {
      value1Pos = intcode[index + 1];
      value2Pos = intcode[index + 2];
      savePos = intcode[index + 3];
      intcode[savePos] = intcode[value1Pos] * intcode[value2Pos];
    }
    index += 4;
  }
  return intcode;
}
