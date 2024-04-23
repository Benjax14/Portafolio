import { Component } from '@angular/core';
import aboutmeData from "../../data/aboutmeData.json";

interface AboutMe {
  name: string,
  job: string,
  address: string,
  firstSection: string,
  secondSection: string,
  thirdSection: string,
  fourSection: string
}

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
})
export class AboutmeComponent {

  textData: AboutMe[] = [aboutmeData];

}
