import { Component, OnInit } from '@angular/core';
import { HealthmodeService } from '../healthmode.service';

@Component({
  selector: 'app-healthmode',
  templateUrl: './healthmode.component.html',
  styleUrls: ['./healthmode.component.scss']
})
export class HealthmodeComponent implements OnInit {
  GroceryList: any;
healthmodestorage:any;
  constructor(private healthmodeService:HealthmodeService) { }

  ngOnInit(): void {
    this.healthmodestorage=localStorage.getItem('healthmode');
  }
  switchmode(event:Event){
     
      
        this.healthmodeService.newEvent(event.target);
      

  }
}
