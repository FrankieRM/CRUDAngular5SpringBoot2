import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarService} from './shared/car/car.service';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CarListComponent} from './car-list/car-list.component';
import {GiphyService} from './shared/giphy/giphy.service';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [CarService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
