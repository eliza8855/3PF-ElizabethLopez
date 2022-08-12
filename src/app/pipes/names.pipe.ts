
import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../commons/student.interface';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: Student): string {
    const firstName = value.nombres
    const lastName = value.apellidos
    return firstName + ' ' + lastName;
  }

}