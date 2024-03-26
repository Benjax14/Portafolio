import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
})
export class AboutmeComponent {


  redirectLinkedin(): void {
    window.open('https://www.linkedin.com/in/bcdr/', '_blank');
  }


}
