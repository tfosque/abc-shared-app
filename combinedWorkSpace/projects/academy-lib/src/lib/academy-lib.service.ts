import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademyLibService {
  baseData = [{ name: 'baseData', payload: [{ name: 'grape' }, { name: 'cheery' }, { name: 'apples' }] }];
  constructor() {
    console.log('adademy-lib service......', this.baseData)
  }
}
