import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../interfaces/icustomer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer:ICustomer = {
    firstName:'',
    surname:'',
    emailAddress: '',
    confirmEmailAddress: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitCustomer(form: NgForm){
    console.log("isValid", form.valid);
    console.log("form", form.value);
  }
}
