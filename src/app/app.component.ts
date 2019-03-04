import { Component } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Open', icon: 'pi pi-fw pi-download'},
        {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
    ];
}
}
