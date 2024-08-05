import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utf8'
})
export class Utf8Pipe implements PipeTransform {
  transform(value: string): string {
    const decoder = new TextDecoder('utf-8');
    const uint8Array = new TextEncoder().encode(value);
    return decoder.decode(uint8Array);
  }
}