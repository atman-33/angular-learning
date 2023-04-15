import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {

  // 別コンポーネントからデータを受け取る際は、@Input() を付与
  @Input() name!: string;

  constructor() {
  }

  /**
   * コンストラクタの次に呼ばれる関数
   */
  ngOnInit() {}
}
