import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HabitListComponent} from './habit-list/habit-list.component'
import { HabitItemComponent } from './habit-item/habit-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template :`<h1>{{title}}</h1> 
  <app-habit-list></app-habit-list>`,
  styles : ['h1 { color:purple; text-align:center }'],
  standalone: true,
  imports:[CommonModule,HabitListComponent,HabitItemComponent,ReactiveFormsModule],
})
export class AppComponent {
  title = 'My Health Tracker';
}
