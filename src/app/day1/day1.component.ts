import { Component, OnInit } from '@angular/core';
import { ModuleMasses } from './module-masses';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss']
})
export class Day1Component implements OnInit {

  solution: number = 0;

  ngOnInit() {
    this.solution = sumNumbers(this.mapMassToFuel(ModuleMasses));
  }

  mapMassToFuel(moduleMasses: number[]): number[] {
    return moduleMasses.map(moduleMass => {
      const moduleFuel = calcFuel(moduleMass);
      const allModuleFuel = addAdditionalFuel(moduleFuel);
      return allModuleFuel;
    });
  }
}

function sumNumbers(numberArray: number[]): number {
  return numberArray.reduce((sum, number) => sum + number);
}

function calcFuel(num: number): number {
  return Math.floor(num / 3) - 2;
}

function addAdditionalFuel(moduleFuel: number): number {
  if (calcFuel(moduleFuel) <= 0) {
    return moduleFuel;
  }
  return recursiveAddAdditionalFuel(moduleFuel + calcFuel(moduleFuel), calcFuel(moduleFuel));
}

function recursiveAddAdditionalFuel(fuel: number, lastAddedFuel: number) {
  const newAdditionalFuel = calcFuel(lastAddedFuel);
  if (newAdditionalFuel <= 0) {
    return fuel;
  }
  return recursiveAddAdditionalFuel(fuel + newAdditionalFuel, newAdditionalFuel);
}