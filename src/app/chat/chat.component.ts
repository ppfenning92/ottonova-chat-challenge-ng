import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService, Command, CommandEvent, MessageEvent} from "../chat.service";
import {AuthService} from "../auth.service";
import {CommandResponseService} from "../command-response.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('chat') private chatContainer: ElementRef  ;

  public conversationLog: Array<CommandEvent | MessageEvent > = [];

  constructor(
    private _chatService: ChatService,
    public authService: AuthService,
    public commandResponseService: CommandResponseService
  ) {
    this.sendMessage('init');
    this._chatService.getMessage().subscribe((data: MessageEvent) => {
      this.conversationLog.push(data)

    })
    this._chatService.getCommand().subscribe((data: CommandEvent) => {
      this.conversationLog.push(data)

      this.displayWidgetComponent(data.command)
    })

    this.commandResponseService.response$.subscribe((response: string) => {
      this.sendMessage(response)
    })
  }

  ngAfterViewChecked() {
    this._scrollToBottom();
  }

  sendMessage(msg: string) {
    const payload = {author: this.authService.user?.username ?? '', message: msg}
    this.conversationLog.push(payload)
    this._chatService.sendMessage(payload)
    this._chatService.sendCommand()
  }
  displayWidgetComponent(command: Command) {

  }
  ngOnInit(): void {
  }

  private _scrollToBottom() {
    if (!this.chatContainer) return;
    const chatBubbles = document.querySelectorAll('.chat__bubble')
    const last = Array.from(chatBubbles)[chatBubbles.length - 1]
    if (last) {
      last.scrollIntoView({behavior: "smooth", block: 'end'})
    }
    // this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

}
