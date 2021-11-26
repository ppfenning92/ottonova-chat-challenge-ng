import {Injectable} from '@angular/core';
import {User} from "./auth/user";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User | null = null;

  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
  }

  public get isAuthenticated() {
    return !!this.user?.id;
  }

  public login(username: string, password: string) {
    // mock login
    this.user = new User(
      Math.random(),
      username
    )
    this._snackBar.open(`Welcome back, ${this.user.username}`, '', {duration: 2000})
    this._router.navigate(['chat']).then()
  }


}
