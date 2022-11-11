import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthFirebaseService } from 'src/app/services/auth.firebase.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUser: FormGroup;
  siteKey: string = "6Lfxs-IiAAAAADUjfbJdXlewbjChMQE-Ki2lYOnI";
  constructor(
    private fb: FormBuilder,
    private toastService: ToastrService,
    private AuthFirebaseService: AuthFirebaseService
  ) {
    this.registerUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  register() {
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeatPassword = this.registerUser.value.repeatPassword;
    const captcha = this.registerUser.value.recaptcha;
    if (captcha == 0) {
      this.toastService.error('Invalid captcha!', 'Please, try again');
    } else {
      if (email == "" && password == "" && repeatPassword == "") {
        this.toastService.error("Debe llenar los campos");
      } else {
        if (password == repeatPassword) {
          this.AuthFirebaseService.registerFireBase(email, password)
        } else {
          this.toastService.error("Las contraseñas no coinciden")
        }
      }
    }
  }
}

