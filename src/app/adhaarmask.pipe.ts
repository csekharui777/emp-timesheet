import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adhaarmask'
})
export class AdhaarmaskPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const prefix = "XXXX XXXX ";
    const postfix = value.slice(-4)
    return `${prefix}${postfix}`;
  }

}
