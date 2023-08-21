import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  /*訂單管理 / 網路訂單 / 編輯頁*/
  static OnlineOrderEditor = 'dashboard/n010100/n010101';

  /*商品管理 / 新增商品*/
  static NewProduct = 'dashboard/n020100/n020101';

  constructor() { }
}
