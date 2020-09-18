import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { HttpService } from '../services/http.service';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormMobile: FormGroup;
  isEditable = false;
  authenticationSuccess= false;
  loginFormOTP: FormGroup;
  secondFormGroup: FormGroup;
  userDetails;

  constructor(private formbuilder: FormBuilder,private api: HttpService) { }

  ngOnInit(): void {
    this.loginFormMobile = this.formbuilder.group({
      mobile: ['', Validators.required],
    });
    this.loginFormOTP = this.formbuilder.group({
      otp: ['', Validators.required]
    });
    this.secondFormGroup = this.formbuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.toolbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('toolbar-inverse');
    } else {
      element.classList.remove('toolbar-inverse');
    }
  }

  onSubmitMobile(form:NgForm) {
    let body = new URLSearchParams();
    body.set('mobile', this.loginFormMobile.controls.mobile.value);
    this.api.post(environment.authApiUrl+'/partner/send_otp',body)
        .subscribe(res => {
          console.log(res);
        }, (err) => {
          console.log(err);
          
        });
    }

    onSubmitOTP(form:NgForm) {
      let body = new URLSearchParams();
      body.set('mobile', this.loginFormMobile.controls.mobile.value);
      body.set('otp', this.loginFormOTP.controls.otp.value);
      this.api.post(environment.authApiUrl+'/partner/login',body)
          .subscribe(res => {
            console.log(this.authenticationSuccess);
            this.authenticationSuccess = true;
            this.userDetails = res;
            localStorage.setItem('userName', this.userDetails.result.name);
          }, (err) => {
            console.log(err);
            
          });
      }

  

}

