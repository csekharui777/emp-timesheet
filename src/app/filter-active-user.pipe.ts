import { Pipe, PipeTransform } from '@angular/core';

interface AdhaarDataModel {
  name: string,
  no: string,
  isActive: boolean
}

@Pipe({
  name: 'filterActiveUser'
})
export class FilterActiveUserPipe implements PipeTransform {

  transform(value: AdhaarDataModel[] , ...args: unknown[]): AdhaarDataModel[] {
    return value.filter( a => a.isActive);
  }

}
