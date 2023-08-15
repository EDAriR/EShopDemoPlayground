import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckIvsQnrReq } from 'src/app/model/ivsQa/checkIvsQnr/checkIvsQnrReq';
import { CheckIvsQnrRes } from 'src/app/model/ivsQa/checkIvsQnr/checkIvsQnrRes';
import { DuplicateIvsQnrReq } from 'src/app/model/ivsQa/duplicateIvsQnr/duplicateIvsQnrReq';
import { DuplicateIvsQnrRes } from 'src/app/model/ivsQa/duplicateIvsQnr/duplicateIvsQnrRes';
import { IvsQnrAnsInquiryReq } from 'src/app/model/ivsQa/ivsQnrAnsInquiry/ivsQnrAnsInquiryReq';
import { IvsQnrAnsInquiryRes } from 'src/app/model/ivsQa/ivsQnrAnsInquiry/ivsQnrAnsInquiryRes';
import { IvsQnrInfoReq } from 'src/app/model/ivsQa/ivsQnrInfo/ivsQnrInfoReq';
import { IvsQnrInfoRes } from 'src/app/model/ivsQa/ivsQnrInfo/ivsQnrInfoRes';
import { IvsQnrInquiryReq } from 'src/app/model/ivsQa/ivsQnrInquiry/ivsQnrInquiryReq';
import { IvsQnrInquiryRes } from 'src/app/model/ivsQa/ivsQnrInquiry/ivsQnrInquiryRes';
import { IvsQnrLogInquiryReq } from 'src/app/model/ivsQa/ivsQnrLogInquiry/ivsQnrLogInquiryReq';
import { IvsQnrLogInquiryRes } from 'src/app/model/ivsQa/ivsQnrLogInquiry/ivsQnrLogInquiryRes';
import { IvsQnrQustInquiryRes } from 'src/app/model/ivsQa/ivsQnrQustInquiry/ivsQnrQustInquiryReq';
import { IvsQnrQustInquiryReq } from 'src/app/model/ivsQa/ivsQnrQustInquiry/ivsQnrQustInquiryRes';
import { NewIvsQnrReq } from 'src/app/model/ivsQa/newIvsQnr/newIvsQnrReq';
import { NewIvsQnrRes } from 'src/app/model/ivsQa/newIvsQnr/newIvsQnrRes';
import { NewIvsQustReq } from 'src/app/model/ivsQa/newIvsQust/newIvsQustReq';
import { PendingIvsQnrInquiryReq } from 'src/app/model/ivsQa/pendingIvsQnrInquiry/pendingIvsQnrInquiryReq';
import { PendingIvsQnrInquiryRes } from 'src/app/model/ivsQa/pendingIvsQnrInquiry/pendingIvsQnrInquiryRes';
import { UpdateIvsQnrReq } from 'src/app/model/ivsQa/updateIvsQnr/updateIvsQnrReq';
import { UpdateIvsQnrRes } from 'src/app/model/ivsQa/updateIvsQnr/updateIvsQnrRes';
import { UpdateIvsQustReq } from 'src/app/model/ivsQa/updateIvsQust/updateIvsQustReq';
import { IvsQustInquiryReq } from './../../../model/ivsQa/ivsQustInquiry/ivsQustInquiryReq';
import { IvsQustInquiryRes } from './../../../model/ivsQa/ivsQustInquiry/ivsQustInquiryRes';
import { NewIvsQustRes } from './../../../model/ivsQa/newIvsQust/newIvsQustRes';
import { UpdateIvsQustRes } from './../../../model/ivsQa/updateIvsQust/updateIvsQustRes';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root',
})
export class IvsQaService {
  constructor(private HttpClients: HttpClientService) {}

  apiUrl = 'ivsQa/';

  /**
   * 查詢投資小問題題目
   *
   * @param {object} req -查詢投資小問題題目 req
   * @returns {object} 查詢投資小問題題目 res
   */
  ivsQustInquiry(req: IvsQustInquiryReq): Observable<IvsQustInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsQustInquiry', req);
  }

  /**
   * 新增投資小問題題目
   *
   * @param {object} req -新增投資小問題題目 req
   * @returns {object} 新增投資小問題題目 res
   */
  newIvsQust(req: NewIvsQustReq): Observable<NewIvsQustRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newIvsQust', req);
  }

  /**
   * 編輯投資小問題題目
   *
   * @param {object} req -編輯投資小問題題目 req
   * @returns {object}編輯投資小問題題目 res
   */
  updateIvsQust(req: UpdateIvsQustReq): Observable<UpdateIvsQustRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateIvsQust', req);
  }

  /**
   * 查詢投資小問題問卷
   *
   * @param {object} req -查詢投資小問題問卷 req
   * @returns {object}查詢投資小問題問卷 res
   */
  ivsQnrInquiry(req: IvsQnrInquiryReq): Observable<IvsQnrInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsQnrInquiry', req);
  }

  /**
   * 查詢投資小問題題庫及投資小問題問卷相關所有題目列表
   *
   * @param {object} req -查詢投資小問題題庫及投資小問題問卷相關所有題目列表 req
   * @returns {object} 查詢投資小問題題庫及投資小問題問卷相關所有題目列表 res
   */
  ivsQnrQustInquiry(
    req: IvsQnrQustInquiryReq
  ): Observable<IvsQnrQustInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsQnrQustInquiry', req);
  }

  /**
   * 查詢投資小問題問卷已選擇題目的答案列表
   *
   * @param {object} req -查詢投資小問題問卷已選擇題目的答案列表 req
   * @returns {object} 查詢投資小問題問卷已選擇題目的答案列表 res
   */
  ivsQnrAnsInquiry(
    req: IvsQnrAnsInquiryReq
  ): Observable<IvsQnrAnsInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsQnrAnsInquiry', req);
  }

  /**
   * 新增投資小問題問卷
   *
   * @param {object} req -新增投資小問題問卷 req
   * @returns {object} 新增投資小問題問卷 res
   */
  newIvsQnr(req: NewIvsQnrReq): Observable<NewIvsQnrRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newIvsQnr', req);
  }

  /**
   * 複製投資小問題問卷
   *
   * @param {object} req -複製投資小問題問卷 req
   * @returns {object} 複製投資小問題問卷 res
   */
  duplicateIvsQnr(req: DuplicateIvsQnrReq): Observable<DuplicateIvsQnrRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'duplicateIvsQnr', req);
  }

  /**
   * 查詢投資小問題問卷題目
   *
   * @param {object} req -查詢投資小問題問卷題目 req
   * @returns {object} 查詢投資小問題問卷題目 res
   */
  ivsQnrInfo(req: IvsQnrInfoReq): Observable<IvsQnrInfoRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsQnrInfo', req);
  }

  /**
   * 編輯投資小問題問卷
   *
   * @param {object} req -編輯投資小問題問卷 req
   * @returns {object} 編輯投資小問題問卷 res
   */
  updateIvsQnr(req: UpdateIvsQnrReq): Observable<UpdateIvsQnrRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateIvsQnr', req);
  }

  /**
   * 查詢待審投資小問題問卷
   *
   * @param {object} req -查詢待審投資小問題問卷 req
   * @returns {object} 查詢待審投資小問題問卷 res
   */
  pendingIvsQnrInquiry(
    req: PendingIvsQnrInquiryReq
  ): Observable<PendingIvsQnrInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'pendingIvsQnrInquiry', req);
  }

  /**
   * 審核投資小問題問卷
   *
   * @param {object} req -審核投資小問題問卷 req
   * @returns {object} 審核投資小問題問卷 res
   */
  checkIvsQnr(req: CheckIvsQnrReq): Observable<CheckIvsQnrRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'checkIvsQnr', req);
  }

  /**
   * 查詢投資小問題問卷紀錄
   *
   * @param {object} req -查詢投資小問題問卷紀錄 req
   * @returns {object} 查詢投資小問題問卷紀錄 res
   */
  ivsQnrLogInquiry(req: IvsQnrLogInquiryReq): Observable<IvsQnrLogInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsQnrLogInquiry', req);
  }
}
