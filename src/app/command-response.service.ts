import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandResponseService {
  private _response: Subject<string> = new Subject<string>();

  public get response$(): Observable<string> {
    return this._response.asObservable()
  }

  public respond(s: string): void {
    this._response.next(s)
  }
}
