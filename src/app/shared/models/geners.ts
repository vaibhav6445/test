export class Genres {   
      id: number;
      name:string;
      results : object;
      
        constructor(values: object = {}) {
            Object.assign(this, values);
        }
  }
  