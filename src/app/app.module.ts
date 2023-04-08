import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from 'src/environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureModule } from './feature/feature.module';
import { MessagesComponent } from './shared/messages/components/messages.component';
import { MessageService } from './shared/messages/message.service';
import { GenericDetailsFormComponent } from './shared/generic-details-form/generic-details-form.component';
import { GenericEditFormComponent } from './shared/generic-form/components/generic-edit-form/generic-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    GenericDetailsFormComponent,
    GenericEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    BrowserAnimationsModule,
    FeatureModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
