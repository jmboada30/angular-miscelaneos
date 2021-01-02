import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [],
})
export class ClassComponent {
  alert: string = 'alert-danger';

  loading: boolean = false;

  properties: any = {};
  constructor() {
    this.properties.danger = false;
  }

  /**
   * runProcess
   */
  public runProcess() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
