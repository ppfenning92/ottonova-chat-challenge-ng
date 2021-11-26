import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {CommonModule} from "@angular/common";
import { RateCommandComponent } from './chat/rate-command/rate-command.component';
import { DateCommandComponent } from './chat/date-command/date-command.component';
import { MapCommandComponent } from './chat/map-command/map-command.component';
import { CompleteCommandComponent } from './chat/complete-command/complete-command.component';

const config: SocketIoConfig = { url: 'https://demo-chat-server.on.ag/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    RateCommandComponent,
    DateCommandComponent,
    MapCommandComponent,
    CompleteCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    SocketIoModule.forRoot(config),

    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
