import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FormHandeling';

  @ViewChild('f') signupForm: NgForm | null = null;

  defaultQua = 'singer';
  answer: string = '';

  genders = ['male', 'female'];

  onSubmit() {
    console.log(this.signupForm);
  }

  setValues() {
    this.signupForm?.setValue({
      gender: 'male',
      secretqua: 'singer',
      quaAnswer: 'Yas',

      userInfo: {
        username: 'raman',
        email: 'khanahmadi.raman@gmail.com',
      },
    });
  }

  suggestValue() {
    this.signupForm?.form.patchValue({
      userInfo: {
        username: 'sepehr',
      },
    });
  }
}
