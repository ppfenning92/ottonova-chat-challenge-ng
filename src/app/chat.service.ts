import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";
import {map, Observable} from "rxjs";


export type DateCommand = {
  type: 'date', // might be a typo in the exercise doc?
  data: string; // ISO date string
}
export type MapCommand = {
  type: 'map',
  data: {
    lat: number,
    lng: number
  }
}

export type RateCommand = {
  type: 'rate',
  data: [number, number]
}

export type CompleteCommand = {
  type: 'complete',
  data: ['yes', 'no']
}
export type Command = RateCommand | MapCommand | DateCommand | CompleteCommand
export type CommandEvent = {
  author: string,
  command: Command,
  ts?: Date,
  message?: undefined,
}
export type MessageEvent = {
  author: string,
  message: string,
  ts?: Date,
  command?: undefined,
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) {}

  sendMessage({author, message}: MessageEvent): void {
    this.socket.emit('message', {author, message});
  }
  public getMessage(): Observable<MessageEvent> {
    return this.socket.fromEvent<MessageEvent>('message').pipe(
      map((ev: MessageEvent) => {
        return {...ev ?? {}, ts: new Date()}
      })
    );
  }
  public sendCommand(): void {
    this.socket.emit('command');
  }
  public getCommand(): Observable<CommandEvent> {
    return this.socket.fromEvent<CommandEvent>('command').pipe(
      map((ev) => {
        return {...ev, ts: new Date()}
      })
    );
  }

}
