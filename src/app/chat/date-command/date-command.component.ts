import {Component, Input, OnInit} from '@angular/core';
import {CommandResponseService} from "../../command-response.service";

export const dayOfWeekMap: Record<string, string> = {
  '0': 'Sunday',
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday',
}

@Component({
  selector: 'app-date-command',
  templateUrl: './date-command.component.html',
  styleUrls: ['./date-command.component.scss']
})
export class DateCommandComponent implements OnInit {

  @Input('data')
  public dateIsoString: string | null = null
  public widgetDone: boolean = false;

  public buttons: string[] = []
  constructor(
    public commandResponseService: CommandResponseService
  ) { }

  ngOnInit(): void {
    if (!this.dateIsoString) return;
    const startDay: number = new Date(this.dateIsoString).getDay();
    for (let i = startDay; i < startDay + 7; i++) {
      const dayToRender = i % 7;
      if (dayToRender === 0 || dayToRender === 6) continue; // skip sunday and saturday
      this.buttons.push(dayOfWeekMap[dayToRender.toString()])
    }
  }

  public select(s: string) {
    this.commandResponseService.respond(s)
    this.widgetDone = true;
  }
}
