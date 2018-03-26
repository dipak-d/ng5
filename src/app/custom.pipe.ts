import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return (args == 'U') ? value.toLocaleUpperCase( ) : value.toLowerCase( );
  }

}
