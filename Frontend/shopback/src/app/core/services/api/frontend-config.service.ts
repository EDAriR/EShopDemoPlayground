import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MetaConfigReq } from 'src/app/model/meta-config/meta-configReq';
import { MetaConfigRes } from 'src/app/model/meta-config/meta-configRes';
import { HttpClientService } from './http-client.service';

/**
 * 網站設定
 */
@Injectable({
  providedIn: 'root',
})
export class FrontendConfigService {
  constructor(private HttpClients: HttpClientService) {}

  apiUrl = 'frontendConfig/';

  /**
   * meta 設定資料取得
   *
   * @param {object} req - meta 設定資料 req
   * @returns {object} meta 設定資料 res
   */
  metaInquiry(
    req: MetaConfigReq
  ): Observable<MetaConfigRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'metaInquiry', req);
  }
}
