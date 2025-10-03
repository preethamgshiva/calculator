import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hyperlinks',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hyperlinks.html',
  styleUrl: './hyperlinks.css'
})
export class Hyperlinks {
  // This property tracks which tab is currently active
  activeTab: string = 'math'; // Set 'math' as the default active tab

  /**
   * Sets the clicked tab as the active one.
   * @param tabId The identifier of the tab to activate.
   */
  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }
}