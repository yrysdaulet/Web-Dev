import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VacancyService} from "./vacancy.service";
import {Vacancy} from "../../models";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  id: string = '';
  vacancy : Vacancy|null = null;

  newName : string = '';
  newDesc : string = '';
  newSalary : string = '';
  constructor(private route: ActivatedRoute , private vacancyService : VacancyService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['vacancyId'];
    this.vacancyService.getVacancy(this.id).subscribe((vacancy)=>{
      this.vacancy = vacancy;
    });
  }
  updateVacancy(){
    this.vacancyService.updateVacancy(parseInt(this.id) , this.newName , this.newDesc , this.newSalary).subscribe((data)=>{
      this.vacancy = data
    })
  }


}
