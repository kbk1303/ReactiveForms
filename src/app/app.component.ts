import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder, private regService: RegistrationService){}

  registrationForm = this.fb.group({
    userName: ['',Validators.required],
    password: ['', [Validators.required, Validators.minLength(10)]],

  })
  /*
  registrationForm = new FormGroup({
    userName: new FormControl('Kris'),
    password: new FormControl('')
  });
  */

  loadAPIData() {
    //this.registrationForm.setValue({userName:"Kristensen", password:"test"});
    this.registrationForm.patchValue({userName: "Kristensen", password: "dfdfdf"});
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.regService.register(this.registrationForm.value).subscribe(() => {

    });
  }
}
