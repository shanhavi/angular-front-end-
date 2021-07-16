import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.css']
})
export class AddRestaurantsComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit(): void {
    const dragAndDrop = $('.dropify').dropify({
      messages: {
        'default': 'Drag and drop a CSV file here or click'
      }
    });

  }


}
