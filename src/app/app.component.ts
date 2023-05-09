import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-vaccine-system';

  registrations:any = [
    "Adams",
    "Baker",
    "Clark",
    "Davis",
    "Evans",
    "Frank",
    "Lopez",
    "Mason",
    "Quinn",
    "Ochoa",
    "Patel",
  ];

  firstDose:any =[];

  secondDose:any =[];

  boosterDose:any =[];

  next(index:number){
    this.firstDose.push(this.registrations[index]);
    this.registrations.splice(index,1);
  }
  D1Done(index:number){
    this.secondDose.push(this.firstDose[index]);
    this.firstDose.splice(index,1);
  }
  D2Done(index:number){
    this.boosterDose.push(this.secondDose[index]);
    this.secondDose.splice(index,1);
  }


  delete(index:number){
    this.registrations.splice(index,1);
  }
  undoToRegistrations(index:number){
    this.registrations.push(this.firstDose[index]);
    this.firstDose.splice(index,1);
  }
  undoToFirstDose(index:number){
    this.firstDose.push(this.secondDose[index]);
    this.secondDose.splice(index,1);
  }
  undoToSecondDose(index:number){
    this.secondDose.push(this.boosterDose[index]);
    this.boosterDose.splice(index,1);
  }
}
