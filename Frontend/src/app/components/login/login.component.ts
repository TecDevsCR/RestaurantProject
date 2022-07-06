import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(email:String):boolean{
    console.log(email);
    return true
  }

  throwSwal(){
    Swal.fire({
      title: 'Submit your email',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Reset password',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        return this.sendEmail(email)
      },
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Successfully!',
          'Check your inbox',
          'success'
        )
      }
    })
  }

}
