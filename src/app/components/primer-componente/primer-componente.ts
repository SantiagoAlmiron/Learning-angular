import { Component } from '@angular/core'

@Component ({
  selector: 'primer-componente',
  template: `
   <h1>Hello word this is my first component</h1>
  `
})
 
export class PrimerComponente{
  constructor() {
    console.log("mi componente cargado"); 
  }
}