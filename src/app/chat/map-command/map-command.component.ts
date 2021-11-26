import {Component, Input, OnInit} from '@angular/core';
import {CommandResponseService} from "../../command-response.service";

@Component({
  selector: 'app-map-command',
  templateUrl: './map-command.component.html',
  styleUrls: ['./map-command.component.scss']
})
export class MapCommandComponent implements OnInit {

  @Input('data')
  public data: {
    lat: number;
    lng: number;
  } | null = null
  constructor(
    public commandResponseService: CommandResponseService
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  public continue() {
    this.commandResponseService.respond('continue')
  }
}
