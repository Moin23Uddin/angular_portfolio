import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {


  isCollapsed = false;
  isCollapsedOne = true;
  isCollapsedTwo = true;

  toggleCollapse(collapse: 'isCollapsed' | 'isCollapsedOne'| 'isCollapsedTwo') {
    if (collapse === 'isCollapsed') {
      this.isCollapsed = false;
      this.isCollapsedOne = true;
      this.isCollapsedTwo = true;
    } else if (collapse === 'isCollapsedOne') {
      this.isCollapsedOne = false;
      this.isCollapsed = true;
      this.isCollapsedTwo = true;
    }
      else{
        this.isCollapsedOne = true;
        this.isCollapsed = true;
        this.isCollapsedTwo = false;
      }
    }
  }

