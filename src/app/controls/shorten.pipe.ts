import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, maxLen?: number): string {
    if(value.length < maxLen) {
      return value;
    } else {
      return value.slice(0, maxLen - 3) + '...';
    }
  }

}
