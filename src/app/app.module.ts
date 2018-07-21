import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgLoadersModule } from 'ng-loaders';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
	declarations: [AppComponent, NavigationComponent],
	imports: [BrowserModule, NgLoadersModule.forRoot({ color: 'red', type: 'pulsing-circles' })],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
