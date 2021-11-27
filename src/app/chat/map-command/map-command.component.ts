import {Component, Input, OnInit} from '@angular/core';
import {CommandResponseService} from "../../command-response.service";

@Component({
  selector: 'app-map-command',
  templateUrl: './map-command.component.html',
  styleUrls: ['./map-command.component.scss']
})
export class MapCommandComponent {

  @Input('data')
  public data: {
    lat: number;
    lng: number;
  } | null = null
  public widgetDone: boolean = false;
  constructor(
    public commandResponseService: CommandResponseService
  ) { }

  public continue() {
    this.commandResponseService.respond('continue')
    this.widgetDone = true;
  }
}
