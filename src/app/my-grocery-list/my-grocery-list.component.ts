import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { grocery } from '../interface/grocery';
// import {cart} from '../interface/cart';
import { HttpClient } from '@angular/common/http';
import grocerylist from '../../assets/grocery.json';
import { HealthmodeService } from '../healthmode.service';
import { SelectorMatcher } from '@angular/compiler';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-my-grocery-list',
  templateUrl: './my-grocery-list.component.html',
  styleUrls: ['./my-grocery-list.component.scss']
})
export class MyGroceryListComponent implements OnInit {
  GroceryList: grocery[] = grocerylist;
  searchitem = new FormControl('');
  // GroceryList:Array<grocery> = [];
  // CartList:Array<cart> = [];
  constructor(private healthmodeService: HealthmodeService) { }

  ngOnInit(): void {
    this.healthmodeService.events$.forEach(event => this.switchmode(event));
    console.log("axfdax", this.healthmodeService);


  }
  switchmode(event: any) {
    
    var healthmodeService = this.healthmodeService;
    if (event.checked){

   
    // this.GroceryList = this.GroceryList.filter(function (item) {
    //           return item.type == '1';
    
         
    //});
    this.GroceryList=this.GroceryList.sort(this.compare);
  }
  else
  {
     this.GroceryList= grocerylist;
  }
  }

  searchfilter(){
    console.log(this.searchitem.value);
    let searchterm = this.searchitem.value.trim();
    if(searchterm){
      this.GroceryList = grocerylist.filter(function (item) {
        return item.cat == searchterm; 
        
  });
    }
    else
    this.GroceryList=grocerylist;
 
  }
  
 compare( a:any, b:any ) {
  if ( a.type < b.type ){
    return -1;
  }
  if ( a.type > b.type ){
    return 1;
  }
  return 0;
}
}
