import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlstripper'
})
export class HtmlstripperPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/<.*?>/g, '');
  }

}
