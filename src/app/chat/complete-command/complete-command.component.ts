import {Component, Input, OnInit} from '@angular/core';
import {CommandResponseService} from "../../command-response.service";

@Component({
  selector: 'app-complete-command',
  templateUrl: './complete-command.component.html',
  styleUrls: ['./complete-command.component.scss']
})
export class CompleteCommandComponent {

  @Input('data')
  public data: ['yes', 'no'] | null = null

  public widgetDone: boolean = false;
  constructor(
    public commandResponseService: CommandResponseService
  ) { }

  public respond(s: string) {
    this.commandResponseService.respond(s)
    this.widgetDone = true;
  }
}
