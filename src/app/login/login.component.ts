import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    if (this._authService.isAuthenticated) {
      this._router.navigate(['chat'])
    }
  }

  public loginForm: FormGroup | null = null;


  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: this._fb.control({value: '', disabled: false}, [Validators.required]),
      password: this._fb.control({value: '', disabled: false},
        [Validators.required, Validators.minLength(8)]
      ),
    })
  }

  public login() {
    this._authService.login(
      this.loginForm?.value.username,
      this.loginForm?.value.password,
    )
  }
}
