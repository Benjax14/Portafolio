import { Component } from '@angular/core';
import skillsData from "../../data/skillsData.json";

interface SkillsData {
  name: string,
  type: string,
  svgIcon: SVGData
}

interface SVGData {
  pathData: string,
  viewBox: string,
  strokeColor: string,
  strokeWidth: string,
  strokeLinecap: string,
  strokeLinejoin: string
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skillsData: SkillsData[] = skillsData;

  get groupedSkills(): { type: string, skills: SkillsData[] }[] {
    const grouped: { [key: string]: SkillsData[] } = {};

    this.skillsData.forEach(skill => {
      if (!grouped[skill.type]) {
        grouped[skill.type] = [];
      }
      grouped[skill.type].push(skill);
    });

    return Object.keys(grouped).map(key => ({ type: key, skills: grouped[key] }));
  }
}
