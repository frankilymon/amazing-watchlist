import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encrypt'
})
export class EncryptPipe implements PipeTransform {

  transform(value: string, sNumb?: number): string {
    let  out = '';
    const shiftNumber = (sNumb) ? sNumb  : 1;
    for(  const letter of value) {
      let temp: string;
      temp = String.fromCharCode(letter.charCodeAt(0) + shiftNumber);
      out += temp;
    }
    return out;
  }

}
