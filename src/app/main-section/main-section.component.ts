import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'main-section',
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent implements OnInit {

  tabArray: string[] = ['PERSONAL', 'EDUCATION', 'CAREER'];
  isActive: boolean[] = [];
  personal:boolean=true;
  education:boolean=false;
  career:boolean=false;
  isCollapsed = true;
  isCollapsedOne = true;
  ngOnInit() {
    this.isActive = this.tabArray.map((_, index) => index === 0);
  }

  setActive(index: number) {
    this.isActive = this.tabArray.map((_, i) => i === index);
  }

  clickFortab(index: number) {
      if(this.tabArray[index]==='PERSONAL'){
        this.education =false;
        this.career =false;
        this.resetCollapses()
      }
      else if(this.tabArray[index]==='EDUCATION'){
        this.education =true;
        this.career =false;
        this.resetCollapses()
      }
      else if(this.tabArray[index]==='CAREER'){
        this.career =true;
        this.education =false;
        this.resetCollapses()
      }
  }

  toggleCollapse(collapse: 'isCollapsed' | 'isCollapsedOne') {
    if (collapse === 'isCollapsed') {
      this.isCollapsed = false;
      this.isCollapsedOne = true;
    } else {
      this.isCollapsedOne = false;
      this.isCollapsed = true;
    }
  }

  resetCollapses() {
    this.isCollapsed = false;
    this.isCollapsedOne = true;
  }
}
