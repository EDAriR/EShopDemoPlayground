import { CheckRecomndPrdRes } from './../../../model/recomndPrd/checkRecomndPrd/checkRecomndPrdRes';
import { CheckRecomndPrdReq } from './../../../model/recomndPrd/checkRecomndPrd/checkRecomndPrdReq';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecomndPrdInfoReqReq } from 'src/app/model/recomndPrd/recomndPrdInfo/recomndPrdInfoReq';
import { RecomndPrdInfoReqRes } from 'src/app/model/recomndPrd/recomndPrdInfo/recomndPrdInfoRes';
import { PendingRecomndPrdRes } from 'src/app/model/recomndPrd/pendingRecomndPrd/pendingRecomndPrdRes';
import { RecomndPrdLogInquiryReq } from 'src/app/model/recomndPrd/recomndPrdLogInquiry/recomndPrdLogInquiryReq';
import { RecomndPrdLogInquiryRes } from 'src/app/model/recomndPrd/recomndPrdLogInquiry/recomndPrdLogInquiryRes';
import { NewRecomndPrdRes } from './../../../model/recomndPrd/newRecomndPrd/newRecomndPrdRes';
import { RecomndPrdInquiryReq } from './../../../model/recomndPrd/recomndPrdInquiry/recomndPrdInquiryReq';
import { RecomndPrdInquiryRes } from './../../../model/recomndPrd/recomndPrdInquiry/recomndPrdInquiryRes';
import { UpdateRecomndPrdReq } from './../../../model/recomndPrd/updateRecomndPrd/updateRecomndPrdReq';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root',
})
export class RecomndPrdService {
  apiUrl = 'recomndPrd/';
  constructor(private HttpClients: HttpClientService) {}

  /**
   * 查詢推薦產品
   * @param req
   * @returns
   */
  recomndPrdInquiry(req: RecomndPrdInquiryReq): Observable<RecomndPrdInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'recomndPrdInquiry', req);
  }

  /**
   * 新增推薦產品
   * @param req
   * @returns
   */
  newRecomndPrd(req: any): Observable<NewRecomndPrdRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newRecomndPrd', req);
  }

  /**
   * 編輯推薦產品
   * @param req
   * @returns
   */
  updateRecomndPrd(req: any): Observable<UpdateRecomndPrdReq> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateRecomndPrd', req);
  }

  /**
   * 查詢待審推薦產品
   * @returns
   */
  pendingRecomndPrd(): Observable<PendingRecomndPrdRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'pendingRecomndPrd');
  }

  /**
   * 審核推薦產品
   * @param req
   * @returns
   */
  checkRecomndPrd(req: CheckRecomndPrdReq): Observable<CheckRecomndPrdRes>{
    return this.HttpClients.postAPI(this.apiUrl + 'checkRecomndPrd', req);
  }


  /**
   * 查詢推薦產品記錄
   *
   * @param {object} req - 查詢推薦產品記錄 req
   * @returns {object} 查詢推薦產品記錄 res
   */
  recomndPrdLogInquiry(req: RecomndPrdLogInquiryReq): Observable<RecomndPrdLogInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'recomndPrdLogInquiry', req);
  }

   /**
   * 查詢推薦產品單筆記錄
   *
   * @param {object} req - 查詢推薦產品單筆記錄 req
   * @returns {object} 查詢推薦產品單筆記錄 res
   */
    recomndPrdInfo(req: RecomndPrdInfoReqReq): Observable<RecomndPrdInfoReqRes> {
      return this.HttpClients.postAPI(this.apiUrl + 'recomndPrdInfo', req);
    }
}
