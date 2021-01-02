import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>
    <br />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi,
      nam illo necessitatibus at veritatis hic fugiat obcaecati cupiditate
      libero facere minus ducimus nesciunt architecto aspernatur. A autem ab
      facilis?
    </p>

    <app-class></app-class>

    <p [appStandOut]="'orange'">
      Hola mundo, pasa el mouse y ve como cambia el color de fondo de este
      parrafo, usando directive Angular
    </p>

    <app-ngswitch></app-ngswitch>
  `,
  styles: [],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
