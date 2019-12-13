import { Component, OnInit } from '@angular/core';
import { ModuleMasses } from './module-masses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  solution: number = 0;

  ngOnInit() {
    this.sumModuleFuelRequirements(this.mapMassToRequiredFuel(ModuleMasses));
  }

  // processes the fuel of each module
  mapMassToRequiredFuel(moduleMasses: number[]): number[] {
    return moduleMasses.map(moduleMass => Math.floor(moduleMass / 3) - 2);
  }

  // sums all modules
  sumModuleFuelRequirements(moduleFuels: number[]): void {
    this.solution = moduleFuels.reduce((sum, number) => sum + number);
  }
}
