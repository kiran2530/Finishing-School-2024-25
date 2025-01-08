import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kiran';

  isSubmit:boolean = false;
  submitText:String = "Submit";

  info = {
    name:'kiran nikam',
    email:'',
    password:''
  };

  onSubmit() {
    this.isSubmit = !this.isSubmit;
    if(this.isSubmit) {
      this.submitText = "Undisplay";
    }
    else {
      this.submitText = "Display";
    }
  }
}
