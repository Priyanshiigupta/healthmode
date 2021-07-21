import { Component, OnInit } from '@angular/core';
import {grocery} from '../interface/grocery';
import {cart} from '../interface/cart';
@Component({
  selector: 'app-my-grocery-list',
  templateUrl: './my-grocery-list.component.html',
  styleUrls: ['./my-grocery-list.component.scss']
})
export class MyGroceryListComponent implements OnInit {

GroceryList:Array<grocery> = [];
CartList:Array<cart> = [];
  constructor() { }

  ngOnInit(): void {
    this.GroceryList= [
      { 'name' : 'Sugar', 'id': '1', 'type' : '2','desc':'Aashirvaad Natures Super Foods Organic Arhar/Tur Dal Pouch, 1 kg','img':'https://m.media-amazon.com/images/I/91VYF9BoANL._AC_AA180_.jpg' },
      { 'name' : 'Jaggery', 'id': '2', 'type' : '1' ,'desc':'24 Mantra Organic Jaggery Powder, 500 grams','img':'https://images-na.ssl-images-amazon.com/images/I/71dqEQihDaL._SL1500_.jpg'},
      { 'name' : 'Honey', 'id': '3', 'type' : '1' ,'desc':'Dabur Honey :100% Pure Worlds No.1 Honey Brand with No Sugar Adulteration - 1kg (Get 20% Extra)','img':'https://images-na.ssl-images-amazon.com/images/I/81hghkkAaSL._SL1500_.jpg'},
      { 'name' : 'Daal', 'id': '1', 'type' : '1' ,'desc':'Aashirvaad Naturs Super Foods Organic Arhar/Tur Dal Pouch, 1 kg','img':'https://images-na.ssl-images-amazon.com/images/I/91VYF9BoANL._SL1500_.jpg'},
      { 'name' : 'Oats', 'id': '2', 'type' : '1' ,'desc':'Yogabar Dark Chocolate Oats 400g | Gluten Free Golden Oats | Healthy Breakfast Cereal with Wholegrain Oats','img':'https://images-na.ssl-images-amazon.com/images/I/911%2Bb8fRovL._SL1500_.jpg'},
      { 'name' : 'Cornflakes', 'id': '3', 'type' : '1' ,'desc':'Kelloggs Corn Flakes Original, High in Iron, High in B Group Vitamins','img':'https://images-na.ssl-images-amazon.com/images/I/71HsQr-pYjL._SL1500_.jpg'},
      { 'name' : 'Kachori', 'id': '1', 'type' : '2' ,'desc':'Gwalias Dry Fruit Kachori 400 Gm | Mini Kachori | Sweet & Spicy Gujarati Farsan Snack | Namkeen Snack','img':'https://images-na.ssl-images-amazon.com/images/I/81gFKrLUkYS._SL1500_.jpg'},
      { 'name' : 'Rice', 'id': '2', 'type' : '2' ,'desc':'Daawat Rozana Super Basmati Rice, 5kg','img':'https://images-na.ssl-images-amazon.com/images/I/810jp1zceeL._SL1500_.jpg'},
      { 'name' : 'Brown rice', 'id': '3', 'type' : '1' ,'desc':'SHRILALMAHAL Fitness Brown Basmati Rice (1 Kg, Jar)','img':'https://images-na.ssl-images-amazon.com/images/I/71wdpjUyAtL._SL1500_.jpg'},
      { 'name' : 'Wheat Atta', 'id': '1', 'type' : '2' ,'desc':'NuShakti Powermix for Atta 100 gms (20 sachets X 5g) | Mix with Atta to Build Immunity | Rich in Vitamins and Minerals | Zero preservatives','img':'https://images-na.ssl-images-amazon.com/images/I/817WPyS6xSS._SL1500_.jpg'},
      { 'name' : 'Whole Grain Atta', 'id': '2', 'type' : '1' ,'desc':'NutroActive Keto Atta (1g Net Carb Per Roti ) Extremely Low Carb Flour - 1kg','img':'https://images-na.ssl-images-amazon.com/images/I/611UA3-bGLL._SL1200_.jpg'},
      { 'name' : 'Pasta', 'id': '3', 'type' : '2' ,'desc':'DiSano Pastalicious 100% Durum Wheat Fusilli Pasta, 1kg','img':'https://images-na.ssl-images-amazon.com/images/I/71cRhuSXWgL._SL1500_.jpg'},
      { 'name' : 'Maggi', 'id': '3', 'type' : '2' ,'desc':'Maggi 2-Minute Noodles Masala, 70g (Pack of 12)','img':'https://images-na.ssl-images-amazon.com/images/I/81WyWDbuqsL._SL1500_.jpg'},
      { 'name' : 'Atta maggi', 'id': '3', 'type' : '1' ,'desc':'MAGGI NUTRI-LICIOUS Masala Veg Atta Noodles – (Pack of 4) 290g Pouch','img':'https://images-na.ssl-images-amazon.com/images/I/81zu71BqgLL._SL1500_.jpg'},
      { 'name' : 'Whole grain maggi', 'id': '3', 'type' : '1' ,'desc':'MAGGI NUTRI-LICIOUS Oats Masala Noodles – (Pack of 4) 290g Pouch','img':'https://images-na.ssl-images-amazon.com/images/I/81ak0oeXQKL._SL1500_.jpg'},
      { 'name' : 'Bread', 'id': '3', 'type' : '2' ,'desc':'English Oven Milk Bread, 400g','img':'https://images-na.ssl-images-amazon.com/images/I/61%2BccwGVLZS._SL1000_.jpg'},
      { 'name' : 'Brown bread', 'id': '3', 'type' : '1' ,'desc':'English Oven Brown Bread, 400g','img':'https://images-na.ssl-images-amazon.com/images/I/81NOg8ew3-L._SL1500_.jpg'},
    ];
    this.CartList= [
      { 'name' : 'Sugar', 'id': '1', 'type' : '2' ,'desc':'','img':''},
      { 'name' : 'Daal', 'id': '1', 'type' : '2' ,'desc':'','img':''},
      { 'name' : 'Kachori', 'id': '1', 'type' : '2' ,'desc':'','img':''},
      { 'name' : 'Rice', 'id': '2', 'type' : '2' ,'desc':'','img':''},
      { 'name' : 'Wheat Atta', 'id': '1', 'type' : '2','desc':'','img':'' },
      { 'name' : 'Pasta', 'id': '3', 'type' : '2','desc':'','img':'' },
      { 'name' : 'Maggi', 'id': '3', 'type' : '2','desc':'','img':'' },
      { 'name' : 'Whole grain maggi', 'id': '3', 'type' : '1' ,'desc':'MAGGI NUTRI-LICIOUS Oats Masala Noodles – (Pack of 4) 290g Pouch','img':'https://images-na.ssl-images-amazon.com/images/I/81ak0oeXQKL._SL1500_.jpg'},
      { 'name' : 'Bread', 'id': '3', 'type' : '2' ,'desc':'English Oven Milk Bread, 400g','img':'https://images-na.ssl-images-amazon.com/images/I/61%2BccwGVLZS._SL1000_.jpg'},
      { 'name' : 'Brown bread', 'id': '3', 'type' : '1' ,'desc':'English Oven Brown Bread, 400g','img':'https://images-na.ssl-images-amazon.com/images/I/81NOg8ew3-L._SL1500_.jpg'},
    ];
  }
switchmode(){
  this.CartList = this.GroceryList.filter(function (item){
return   item.type=='1';

  });
  //   { 'name' : 'sugar1', 'id': '1', 'type' : 'good' },
  //   { 'name' : 'Jaggery2', 'id': '2', 'type' : 'bad' },
  //   { 'name' : 'Honey3', 'id': '3', 'type' : 'good' }];

}
}
