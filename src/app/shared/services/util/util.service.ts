import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}
  sortArrayBasedOnProps(array, prop, order = 'DESC') {
    // return array.sort((a, b) => {
    //   console.log(a, prop, a[prop]);
    //   return a[prop].toString().localeCompare(b[prop].toString());
    // });
    return array.sort((a, b) => {
      let result;
      switch (order) {
        case 'ASC':
          result = a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0;
          break;
        case 'DESC':
          result = a[prop] < b[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
          break;
      }
      return result;
    });
  }
  filterArrayBasedOnProps(array, propsArr, prop) {
    return array.filter((fData) => {
      return propsArr.indexOf(this.getFilterProp(prop)) !== -1;
    });
  }
  private getFilterProp(prop) {
    if (prop !== 'object') {
      return prop;
    }
    this.getFilterProp(Object.keys(prop)[0]);
  }
}
