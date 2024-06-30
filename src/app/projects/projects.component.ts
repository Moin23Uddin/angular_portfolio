import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  tabArray: string[] = ['PROJECT ONE', 'PROJECT TWO'];
  isActive: boolean[] = [];
  projectOne:boolean=true;
  projectTwo:boolean=false;
  ngOnInit() {
    this.isActive = this.tabArray.map((_, index) => index === 0);
  }

  setActive(index: number) {
    this.isActive = this.tabArray.map((_, i) => i === index);
  }

  clickFortab(index: number) {
    if(this.tabArray[index]==='PROJECT ONE'){
      this.projectOne = true;
      this.projectTwo =false;

    }
    else if(this.tabArray[index]==='PROJECT TWO'){
      this.projectOne =false;
      this.projectTwo =true;
    }

  }
  goToLink(num:string) {
    if(num=="1"){
      window.open('https://github.com/Moin23Uddin/Quranify-Website-', '_blank');
    }
    else if(num=="2"){
      window.open('https://github.com/Moin23Uddin/Crud-Operation', '_blank');
    }

  }
}
