import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // 別コンポーネントからプロパティを受け取る際は、@Input() を付与
  @Input() name!: string;
  
  // このコンポーネントからイベントを送る際は、@Output() を付与
  @Output() onNotify = new EventEmitter();

  constructor() {}

  /**
   * ngOnInit は、コンストラクタの次に呼ばれる関数
   */
  ngOnInit() {}
}
