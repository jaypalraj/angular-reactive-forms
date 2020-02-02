import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

function emailMatcher(control: AbstractControl): { [key: string]:boolean } | null{
  const emailControl = control.get('email');
  const confirmEmailControl = control.get('confirmEmail');

  if(emailControl.pristine || emailControl.pristine)
  {
    return null;
  }

  if(emailControl.value === confirmEmailControl.value)
  {
    return null;
  }

  return { match: true };
}




@Component({
  selector: 'customer-reactive-form',
  templateUrl: './customer-reactive-form.component.html',
  styleUrls: ['./customer-reactive-form.component.css']
})
export class CustomerReactiveFormComponent implements OnInit {

  customerForm:FormGroup;

  get socialMedias(): FormArray {
    return this.customerForm.get('socialMedias') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /*
    this.customerForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email])
    });
    */
    this.customerForm = this.fb.group({
      firstName: ['',[Validators.required]],
      surname:['',[Validators.required]],

      emailGroup: this.fb.group({
        email:['',[Validators.required,Validators.email]],
        confirmEmail:['',Validators.required]
      }, { validators: emailMatcher }),
      socialMedias: this.fb.array([this.buildSocialMedia()])
    });

    /*
    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => console.log("emailControl",emailControl) //this.setMessage(emailControl)
    );
    */
  }

  addSocialMedia(){
    this.socialMedias.push(this.buildSocialMedia())
  }

  buildSocialMedia() : FormGroup{
    return this.fb.group({
      socialMediaTitle: ['', Validators.required]
    });
  }

  onSubmitCustomer(){
    console.log("isValid", this.customerForm.valid);
    console.log("form", this.customerForm);    
  }
}
