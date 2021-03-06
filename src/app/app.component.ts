import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public spinnerType: string = 'rotating-square';

	setSpinnerType(type: any) {
		this.spinnerType = type;
	}
}
