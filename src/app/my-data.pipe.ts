import { Pipe, PipeTransform } from '@angular/core';
// Use pipes to transform strings, currency amounts, dates, and other data for display
// A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe.

// An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.
// DatePipe: Formats a date value according to locale rules.
// UpperCasePipe: Transforms text to all upper case.
// LowerCasePipe: Transforms text to all lower case.
// CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
// DecimalPipe: Transforms a number into a string with a decimal point, formatted according to locale rules.
// PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.
// AsyncPipe: Subscribe and unsubscribe to an asynchronous source such as an observable.
// JsonPipe: Display a component object property to the screen as JSON for debugging.
@Pipe({
  name: 'myData'
})
export class MyDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
