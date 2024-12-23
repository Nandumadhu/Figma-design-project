import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ActionPanelComponent } from './components/action-panel/action-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, SidebarComponent, MainContentComponent, ActionPanelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dashboard';
}
