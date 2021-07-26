import { Component, OnInit } from '@angular/core';

import { HealthmodeService } from '../healthmode.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  healthmode:Boolean=false;
  visible:boolean = false;
  showhideUtility(){
    this.visible = this.visible?false:true;
  }
  constructor(private healthmodeService: HealthmodeService) { }

  ngOnInit(): void {
    this.healthmodeService.events$.forEach((event: any) => this.switchmode(event));
  }

  switchmode(event: any) {
    if (event.checked){
     this.healthmode=true;
    }
    else{
this.healthmode=false;
    }
  }
}
