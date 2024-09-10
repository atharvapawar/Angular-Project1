import { Component } from '@angular/core';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrl: './student-filter.component.scss'
})
export class StudentFilterComponent {
  filterText:any='';
  students: any = [
    {
      name: 'Abhay',
      course: 'Computers',
      marks: 80,
      dob: new Date('12-03-1997'),
      gender: 'Male',
    },
    {
      name: 'Bhakti',
      course: 'Computers',
      marks: 82,
      dob: new Date('12,8,1996'),
      gender: 'Female',
    },
    {
      name: 'Cathy',
      course: 'Science',
      marks: 83,
      dob: new Date('11,3,1997'),
      gender: 'Female',
    },
    {
      name: 'Dev',
      course: 'Science',
      marks: 82,
      dob: new Date('11,3,1997'),
      gender: 'Male',
    },
    {
      name: 'Fiara',
      course: 'Math',
      marks: 80,
      dob: new Date('1,3,1997'),
      gender: 'Female',
    },
    {
      name: 'Edward',
      course: 'Math',
      marks: 81,
      dob: new Date('5,3,1997'),
      gender: 'Male',
    },
  ];

  addStudent(){
    this.students.push({name: 'Georgia',course: 'Accounts',marks: 71,dob: new Date('8,4,1998'),gender: 'Female'});
  }
}
