import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'imageFilter'})

export class imageFilterPipe implements PipeTransform{
  transform(items: any[], criteria: string): any {
    if( criteria === 'all') {
      return items;
    }else{
      return items.filter(item => {
      return item.category === criteria;
    })
  }
}
}
