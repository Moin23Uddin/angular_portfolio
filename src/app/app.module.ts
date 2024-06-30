import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
CollapseToggleDirective
import {
  CollapseDirective,
  ContainerComponent, NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective, NavLinkDirective
} from "@coreui/angular";
import { MainSectionComponent } from './main-section/main-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseToggleDirective } from './directive/collapse-toggle.directive';
import { ContactComponent } from './contact/contact.component';
import {RoutingModule} from "./routing.module";
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { OutsideComponent } from './outside/outside.component';
import { BackgroundComponent } from './background/background.component';
import {ReactiveFormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    MainSectionComponent,
    CollapseToggleDirective,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    OutsideComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    NavbarComponent,
    ContainerComponent,
    NavbarTogglerDirective,
    CollapseDirective,
    NavbarNavComponent,
    NavLinkDirective,
    NavbarBrandDirective,
    NgbModule,
    RoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
