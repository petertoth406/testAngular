import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../../services/my.service';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AuthService
  ) {
    this.form = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })

  }

  login() {

    if(this.form.invalid){
      alert("A mezők kitöltése kötelező")
      return;
    }
    console.log(this.form.value)

    this.auth.login(this.form.value).subscribe(res=>{
      if(res.accessToken){
        this.auth.setToken(res.accessToken);
        this.router.navigate(['home']);
      }
    },err=>{
      alert("Sikertelen Bejelentkezés"); 
      console.error(err);
    })

    /*this.myService.login();
    console.log('Logged in');
    */
  }

  ngOnDestroy(): void {
    //alert("Bejelentkezés sikeres");
  }
}