import { Component, OnInit } from '@angular/core';

import { TeetimeService } from "../teetime.service";

@Component({
  selector: 'app-teetime',
  templateUrl: './teetime.component.html',
  styleUrls: ['./teetime.component.css']
})
export class TeetimeComponent implements OnInit {

  teetimes: any
  golferName: string | undefined
  holes: number | undefined
  cartRequired: boolean | undefined
  date: number | undefined
  greenFee: number | undefined

  constructor(private service: TeetimeService) { }

  ngOnInit(): void {
    this.getTeetimes()
  }

  getTeetimes(): void {
    // call service which in turn calls server api to fetch the teetimes
    this.service.getTeetime().subscribe(teetime => {
      this.teetimes = teetime
    })
  }

  addTeetime(): void {
    let teetime = {
      golferName: this.golferName,
      holes: this.holes,
      cartRequired: this.cartRequired,
      date: this.date,
      greenFee:this.greenFee
    }

    // call the service and pass the new object to be saved
    this.service.addTeetime(teetime).subscribe(teetime => {
      // refresh the list
      this.getTeetimes()
      // clear the form
      this.clearForm()
    })
  }

  clearForm(): void {
    this.golferName = undefined
    this.holes = undefined
    this.cartRequired = undefined
    this.date = undefined
    this.greenFee = undefined
  }

}
