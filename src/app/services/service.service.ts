import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  async getAllTodo() {
    const options = {
      url: 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8',
      headers: { 'content-type': 'application/json' },
    };
  
    return await Http.get(options);
  }

}


// https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8