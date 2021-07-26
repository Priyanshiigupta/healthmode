import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { grocery } from '../interface/grocery';
import grocerylist from '../../assets/grocery.json';

import { HealthmodeService } from '../healthmode.service';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {
healthmode:Boolean=false;
  id: any = '';
  GroceryList: grocery[] = grocerylist;
  grocery: any;
  healthmodestorage:any;
  
  constructor(private router: Router, private route: ActivatedRoute,private healthmodeService: HealthmodeService) { }

  ngOnInit(): void {
   this.healthmodestorage=localStorage.getItem('healthmode');
    this.id = this.route.snapshot.paramMap.get('id');
    this.grocery = this.GroceryList.find(e => e.id == this.id)
    console.log(this.grocery);

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

  myfunction() {
    alert("Your item added to the cart");
  }

}
