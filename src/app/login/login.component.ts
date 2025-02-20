import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MyService } from '../../services/my.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {

  form: FormGroup

  constructor(private myService: MyService,
              private router: Router,
              private fb: FormBuilder,
              private auth: AuthService
  ) {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }


  login() {
    console.log(this.form.value);
    let errors = [""];
    /*if(this.form.get('username')?.errors!['required']){
      errors.push("A username kitöltése kötelező")
    } 
    if(this.form.get('password')?.errors!['required']){
      errors.push("A jelszó kitöltése kötelező")
    } 
    if(this.form.get('username')?.errors!['minlength']){
      errors.push("A jelszó nem elég hosszú")
    } */

    if(this.form.valid){
      this.auth.login(this.form.value).subscribe(res=>{
        console.log(res);
        this.auth.saveToken(res.accessToken)

      }, err=>{
        alert("Sikeretelen bejelentkezés")
        console.error(err)
      })


      /*this.myService.login();
      console.log('Logged in');
      this.router.navigate(['home']);*/
    }else{
      alert(errors.concat())
    }

    
  }

  ngOnDestroy(): void {
    alert("Bezárás")
  }
}