import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

// Define an interface for the habit type
interface Habit {
  id: number;
  title: string;
  des: string;
}

@Component({
  selector: 'app-habit-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Added ReactiveFormsModule
  template: `
    <div class="habit-container">
      <h2 class="heading">Habit Tracker</h2>
      <form [formGroup]="habitform" (ngSubmit)="onSubmit(habitform.value)" class="habit-form">
        <input type="text" placeholder="Add Habit Title" formControlName="title" class="input-field" required>
        <input type="text" placeholder="Add Habit Description" formControlName="des" class="input-field" required>
        <button type="submit" class="submit-btn">Add Habit</button>
      </form>
      
      <ul class="habit-list">
        <li *ngFor="let habit of habits" class="habit-item">
          <strong class="habit-title">{{ habit.title }}</strong>
          <p class="habit-description">{{ habit.des }}</p>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .habit-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      .heading {
        text-align: center;
        color: #4a4a4a;
        font-size: 24px;
        margin-bottom: 20px;
      }

      .habit-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .input-field {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 10px;
        width: 100%;
      }

      .submit-btn {
        background-color: #4caf50;
        color: white;
        border: none;
        padding: 12px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .submit-btn:hover {
        background-color: #45a049;
      }

      .habit-list {
        list-style-type: none;
        padding: 0;
        margin-top: 20px;
      }

      .habit-item {
        background-color: #fff;
        border: 1px solid #ddd;
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .habit-title {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        color: #333;
      }

      .habit-description {
        font-size: 14px;
        color: #555;
        margin-top: 5px;
      }

      /* Media Query for mobile responsiveness */
      @media (max-width: 600px) {
        .habit-container {
          padding: 10px;
        }

        .heading {
          font-size: 20px;
        }

        .input-field {
          font-size: 14px;
        }

        .submit-btn {
          font-size: 14px;
        }

        .habit-title {
          font-size: 16px;
        }

        .habit-description {
          font-size: 12px;
        }
      }
    `
  ],
})
export class HabitListComponent implements OnInit {
  habitform: FormGroup;
  habits: Habit[] = [
    {
      id: 1,
      title: 'Daily Planning:',
      des: 'Start each day by setting clear goals and priorities using tools like a to-do list or a digital planner.'
    },
    {
      id: 2,
      title: 'Continuous Learning:',
      des: 'Dedicate 15-30 minutes daily to learning a new skill or industry trend.'
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week',
      des: 'Dedicate 5 hours to working on side projects.'
    },
    {
      id: 4,
      title: 'Reflection:',
      des: 'Spend 5-10 minutes at the end of the day reviewing accomplishments and areas for improvement.'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.habitform = this.formBuilder.group({
      title: '',
      des: ''
    });
  }

  // onSubmit now expects newHabit to conform to the Habit interface
  onSubmit(newHabit: { title: string, des: string }): void {
    const id = this.habits.length + 1;
    const habitWithId: Habit = { id, title: newHabit.title, des: newHabit.des };  // Create a new habit object with id
    this.habits.push(habitWithId);  // Add the new habit to the list
    this.habitform.reset();  // Reset the form
  }

  ngOnInit(): void {}
}
