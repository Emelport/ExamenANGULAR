import { Component } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { ViewComponent } from '../view/view.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [AddComponent, ViewComponent, StatsComponent],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {

}
