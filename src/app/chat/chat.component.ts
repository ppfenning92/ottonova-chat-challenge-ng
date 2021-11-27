import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService, Command, CommandEvent, MessageEvent} from "../chat.service";
import {AuthService} from "../auth.service";
import {CommandResponseService} from "../command-response.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @ViewChild('chat') private chatContainer: ElementRef  ;

  public conversationLog: Array<CommandEvent | MessageEvent > = [];
  public inputCtrl: FormControl = new FormControl();

  constructor(
    private _chatService: ChatService,
    public authService: AuthService,
    public commandResponseService: CommandResponseService
  ) {
    this.sendMessage('init');
    this._chatService.getMessage().subscribe((data: MessageEvent) => {
      this.conversationLog.push(data)
      this._scrollToBottom();
    })
    this._chatService.getCommand().subscribe((data: CommandEvent) => {
      this.conversationLog.push(data)
      this._scrollToBottom();
    })

    this.commandResponseService.response$.subscribe((response: string) => {
      this.sendMessage(response)
    })
  }


  sendMessage(msg: string, skipCommandRequest: boolean = false) {
    const payload = {author: this.authService.user?.username ?? '', message: msg, ts: new Date()}
    this.conversationLog.push(payload)
    this._scrollToBottom();
    this._chatService.sendMessage(payload)
    if (skipCommandRequest) return;
    this._chatService.sendCommand()
  }
  send() {
    this.sendMessage(this.inputCtrl.value, true)
    this.inputCtrl.reset();
  }

  private _scrollToBottom() {
    if (!this.chatContainer) return;
    const chatBubbles = document.querySelectorAll('.chat__bubble')
    const last = Array.from(chatBubbles)[chatBubbles.length - 1]
    if (last) {
      last.scrollIntoView({behavior: "smooth", block: 'end'})
    }
  }

}
