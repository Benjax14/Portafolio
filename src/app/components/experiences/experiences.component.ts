import { Component } from '@angular/core';
import experiencesData from "../../data/experiencesData.json";

interface ExperiencesData {
  job: string
  company: string
  timeline: string
  description: string
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html'
})
export class ExperiencesComponent {

  experiencesData: ExperiencesData[] = experiencesData;

}
