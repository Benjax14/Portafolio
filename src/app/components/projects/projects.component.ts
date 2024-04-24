import { Component } from '@angular/core';
import projectsData from "../../data/projectsData.json"

interface ProjectsData{
  title: string
  description: string
  githubURL?: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  projectsData: ProjectsData[] = projectsData; 

}
