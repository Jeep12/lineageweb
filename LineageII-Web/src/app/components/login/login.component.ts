import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthFirebaseService } from 'src/app/services/auth.firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;
  siteKey: string = "6Lfxs-IiAAAAADUjfbJdXlewbjChMQE-Ki2lYOnI";

  constructor(
    private fb: FormBuilder,
    private toastService: ToastrService,
    private AuthFirebaseService: AuthFirebaseService
  ) {
    this.loginUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  login(){
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;
    const captcha = this.loginUser.value.recaptcha;

    if (captcha == 0) {
      this.toastService.error('Invalid captcha!', 'Please, try again');
    } else {
      if (email == "" && password == "") {
        this.toastService.error("Debe llenar los campos");
      } else {
          this.AuthFirebaseService.login(email, password)

      }
    }
  }

}
