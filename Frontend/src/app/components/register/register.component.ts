import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatchService } from '../../_helpers/must-match.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private validatorService: MustMatchService) { }


  public userAccount:FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    passwordValidator: new FormControl('',[Validators.required]),
  },{
    validators: this.validatorService.passwordMatch('password', 'passwordValidator')
  }
  )


  ngOnInit(): void {
  }

  register(){
    
    
    //window.location.href = 'http://localhost:4200/#/login';
  }

}


 