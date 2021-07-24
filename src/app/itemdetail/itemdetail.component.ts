import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { grocery } from '../interface/grocery';
import grocerylist from '../../assets/grocery.json';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {
id:any='';
GroceryList: grocery[] = grocerylist;
  grocery: any;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.id= this.route.snapshot.paramMap.get('id');
  this.grocery= this.GroceryList.find(e => e.id == this.id)
  console.log(this.grocery);
     }
     

}
