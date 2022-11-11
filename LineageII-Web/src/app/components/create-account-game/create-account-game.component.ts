import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiLineageIIService } from 'src/app/services/api-lineage-ii.service';

@Component({
  selector: 'app-create-account-game',
  templateUrl: './create-account-game.component.html',
  styleUrls: ['./create-account-game.component.css']
})
export class CreateAccountGameComponent implements OnInit {
  formRegister:FormGroup;
  @Input()
  email!: string;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastrService,
    private api:ApiLineageIIService
    ) {
      this.formRegister = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required]
      });
     }

  ngOnInit(): void {
  }
  register():void {
    const login = this.formRegister.value.login;
    const password = this.formRegister.value.password;
    const repeatPassword = this.formRegister.value.repeatPassword;

    if(password != repeatPassword){
      this.toastService.error("Las contraseñas no coinciden")
    }else {

      this.api.addAccount(login,password,this.email).subscribe((response: any)=>{
        console.log(response);
      });
    }

  }

}
