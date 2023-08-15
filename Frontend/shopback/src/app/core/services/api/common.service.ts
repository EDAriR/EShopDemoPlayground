import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

/**
 * common 相關方法
 *
 * @class CommonService
 */
@Injectable({
  providedIn: 'root',
})


export class CommonService {
  constructor(private HttpClients: HttpClientService) {}

  /**
   * 顯示使用者可使用功能
   */
  userMenu(req?: any): any {
    return this.HttpClients.postAPI('common/userMenu', req);
  }
}
