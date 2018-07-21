import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgLoadersModule, NgLoadersTypes } from 'ng-loaders';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
	declarations: [AppComponent, NavigationComponent],
	imports: [BrowserModule, NgLoadersModule.forRoot({ color: 'red', type: NgLoadersTypes.PULSING_CIRCLES })],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
