import {Component, Input, OnInit} from '@angular/core';
import {CommandResponseService} from "../../command-response.service";

@Component({
  selector: 'app-rate-command',
  templateUrl: './rate-command.component.html',
  styleUrls: ['./rate-command.component.scss']
})
export class RateCommandComponent implements OnInit {

  @Input('data')
  public data: [number, number] | null = null
  public buttons: string[] = []
  public widgetDone: boolean = false;
  public selected: string;

  constructor(
    public commandResponseService: CommandResponseService
  ) { }


  ngOnInit(): void {
    if (!this.data) return;
    const [min, max]: [number, number] = this.data;
    for (let i = min; i <= max; i++) {
      this.buttons.push(i.toString())
    }
    this.buttons.reverse();
  }



  public rate(rating: number) {
    this.commandResponseService.respond(rating.toString())
    this.selected = rating.toString();
    this.widgetDone = true
  }

}
