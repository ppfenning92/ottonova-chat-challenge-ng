import {Component, Input, OnInit} from '@angular/core';
import {CommandResponseService} from "../../command-response.service";

@Component({
  selector: 'app-complete-command',
  templateUrl: './complete-command.component.html',
  styleUrls: ['./complete-command.component.scss']
})
export class CompleteCommandComponent implements OnInit {

  @Input('data')
  public data: {
    data: ['yes', 'no']
  } | null = null
  constructor(
    public commandResponseService: CommandResponseService
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  public respond(s: string) {
    this.commandResponseService.respond(s)
  }
}
