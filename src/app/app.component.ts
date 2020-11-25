import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
}



\\Homework Class 3
customer: any = {id:1, name:'John', game: 'modernwar'};
  student: any = {id:2, name:'Tom', email: 'tom@gmail.com'};

  laptop: any = {manufaturer:'Dell', model:'786', processor:'Intel core i7'};
  mobile: any = {brand:'Apple', model:'iPhone X', capacity:'128gb'};
  shoes: any = {brand:'Nike', model:'Jordan', size:11};
  car: any = {brand:'Audi', model:'2020', trim:'100'};
  employee: any= {department:'Workday', id: '572045', role:'Business Analyst'};

  
  
  building: any[] = [
                      {doorNumber:100, owner:'Sonia', type:'1BHK'},
                      {doorNumber:200, owner:'Sonika', type:'2BHK'},
                      {doorNumber:300, owner:'Sony', type:'3BHK'},
  ];



\\Homework Class 4
customer = {
  purchaseOrderID: 'Sonia123', productName: 'Cold War', adress: [
    { adresstype: 'billing', streetName: 'Yorktown', apartment: '123', city: 'houston', zipcode: '77056' },
    { adresstype: 'shipping', streetName: 'Galleria', apartment: '100', city: 'houston', zipcode: '77057' }],
  cardinfo: { nameonthecard: 'Sonia', cardNumber: '123456789', validity: '1/22', cvv: '786' }
};




















