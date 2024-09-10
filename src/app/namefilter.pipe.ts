import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter',
  pure:false
})
export class NamefilterPipe implements PipeTransform {
 transform(students:any, filterText:any) {
  var filteredStudents = [];
  console.log(students, filterText);
     if(filterText === " " || students.length === 0 || !filterText){
        return students;
     }else{
        for(let student of students){
          if(student.name == filterText || student.gender == filterText || student.course == filterText) {
            filteredStudents.push(student);
          }
        }
        return filteredStudents;
     }
}

}
