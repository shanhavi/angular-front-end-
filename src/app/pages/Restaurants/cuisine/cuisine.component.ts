import { CuisineApiService } from './cuisine-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  constructor(private CuisineApiService: CuisineApiService) { }

  ngOnInit(): void {
    const data={name_e:"name_e",name_a:"name_a",status:"status"}
    this.CuisineApiService.postApi(data,'add').then(res =>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  onSubmit(form: NgForm){
  	console.log(form.value);
  }


}
