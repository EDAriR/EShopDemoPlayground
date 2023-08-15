import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckKycQnrReq } from 'src/app/model/kycQa/checkKycQnr/checkKycQnrReq';
import { DuplicateKycQnrRes } from 'src/app/model/kycQa/duplicateKycQnr/duplicateKycQnrRes';
import { KycQnrAnsInquiryRes } from 'src/app/model/kycQa/kycQnrAnsInquiry/kycQnrAnsInquiryRes';
import { KycQnrInquiryReq } from 'src/app/model/kycQa/kycQnrInquiry/kycQnrInquiryReq';
import { KycQnrInquiryRes } from 'src/app/model/kycQa/kycQnrInquiry/kycQnrInquiryRes';
import { KycQustInquiryReq } from 'src/app/model/kycQa/kycQustInquiry/kycQustInquiryReq';
import { KycQustInquiryRes } from 'src/app/model/kycQa/kycQustInquiry/kycQustInquiryRes';
import { NewKycQnrRes } from 'src/app/model/kycQa/newKycQnr/newKycQnrRes';
import { NewKycQustReq } from 'src/app/model/kycQa/newKycQust/newKycQustReq';
import { NewKycQustRes } from 'src/app/model/kycQa/newKycQust/newKycQustRes';
import { UpdateKycQnrRes } from 'src/app/model/kycQa/updateKycQnr/updateKycQnrRes';
import { UpdateKycQustReq } from 'src/app/model/kycQa/updateKycQust/updateKycQustReq';
import { UpdateKycQustRes } from 'src/app/model/kycQa/updateKycQust/updateKycQustRes';
import { CheckKycQnrRes } from './../../../model/kycQa/checkKycQnr/checkKycQnrRes';
import { DuplicateKycQnrReq } from './../../../model/kycQa/duplicateKycQnr/duplicateKycQnrReq';
import { KycQnrAnsInquiryReq } from './../../../model/kycQa/kycQnrAnsInquiry/kycQnrAnsInquiryReq';
import { KycQnrInfoReq } from './../../../model/kycQa/kycQnrInfo/kycQnrInfoReq';
import { KycQnrInfoRes } from './../../../model/kycQa/kycQnrInfo/kycQnrInfoRes';
import { KycQnrLogInquiryReq } from './../../../model/kycQa/kycQnrLogInquiry/kycQnrLogInquiryReq';
import { KycQnrQustInquiryReq } from './../../../model/kycQa/kycQnrQustInquiry/kycQnrQustInquiryReq';
import { KycQnrQustInquiryRes } from './../../../model/kycQa/kycQnrQustInquiry/kycQnrQustInquiryRes';
import { NewKycQnrReq } from './../../../model/kycQa/newKycQnr/newKycQnrReq';
import { PendingKycQnrInquiryReq } from './../../../model/kycQa/pendingKycQnrInquiry/pendingKycQnrInquiryReq';
import { PendingKycQnrInquiryRes } from './../../../model/kycQa/pendingKycQnrInquiry/pendingKycQnrInquiryRes';
import { UpdateKycQnrReq } from './../../../model/kycQa/updateKycQnr/updateKycQnrReq';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root',
})
export class KycQaService {
  apiUrl = 'kycQa/';
  constructor(private HttpClients: HttpClientService) {}

  /**
   * 查詢KYC題目
   * @param {object} req 查詢KYC題目Req
   * @returns {object} 查詢KYC題目Res
   */
  kycQustInquiry(req: KycQustInquiryReq): Observable<KycQustInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'kycQustInquiry', req);
  }

  /**
   * 新增KYC題目
   * @param {object} req 新增KYC題目Req
   * @returns {object} 新增KYC題目Res
   */
  newKycQust(req: NewKycQustReq): Observable<NewKycQustRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newKycQust', req);
  }

  /**
   * 編輯KYC題目
   * @param req
   * @returns
   */
  updateKycQust(req: UpdateKycQustReq): Observable<UpdateKycQustRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateKycQust', req);
  }

  /**
   * 查詢KYC問卷
   * @param {object} req 查詢KYC問卷Req
   * @returns {object} 查詢KYC問卷Res
   */
  kycQnrInquiry(req: KycQnrInquiryReq): Observable<KycQnrInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'kycQnrInquiry', req);
  }

  /**
   * 查詢KYC題庫及KYC問卷相關所有題目列表
   * @param {object} req 查詢KYC題庫及KYC問卷相關所有題目列表Req
   * @returns {object} 查詢KYC題庫及KYC問卷相關所有題目列表Res
   */
  kycQnrQustInquiry(
    req: KycQnrQustInquiryReq
  ): Observable<KycQnrQustInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'kycQnrQustInquiry', req);
  }

  /**
   * 查詢KYC問卷已選擇題目的答案列表
   * @param {object} req 查詢KYC問卷已選擇題目的答案列表Req
   * @returns {object} 查詢KYC問卷已選擇題目的答案列表Res
   */
  kycQnrAnsInquiry(
    req: KycQnrAnsInquiryReq[]
  ): Observable<KycQnrAnsInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'kycQnrAnsInquiry', req);
  }

  /**
   * 新增KYC問卷
   * @param {object} req 新增KYC問卷Req
   * @returns {object} 新增KYC問卷Res
   */
  newKycQnr(req: NewKycQnrReq): Observable<NewKycQnrRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newKycQnr', req);
  }

  /**
   * 複製KYC問卷
   * @param {object} req 複製KYC問卷Req
   * @returns {object} 複製KYC問卷Res
   */
  duplicateKycQnr(req: DuplicateKycQnrReq): Observable<DuplicateKycQnrRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'duplicateKycQnr', req);
  }

  /**
   * 查詢單筆KYC問卷
   * @param {object} req 查詢單筆KYC問卷Req
   * @returns {object} 查詢單筆KYC問卷Res
   */
  kycQnrInfo(req: KycQnrInfoReq): Observable<KycQnrInfoRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'kycQnrInfo', req);
  }

  /**
   * 編輯KYC問卷
   * @param {object} req 編輯KYC問卷Req
   * @returns {object} 編輯KYC問卷Res
   */
  updateKycQnr(req: UpdateKycQnrReq): Observable<UpdateKycQnrRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateKycQnr', req);
  }

  /**
   * 查詢待審KYC問卷
   * @param {object} req 查詢待審KYC問卷Req
   * @returns {object} 查詢待審KYC問卷Res
   */
  pendingKycQnrInquiry(
    req: PendingKycQnrInquiryReq
  ): Observable<PendingKycQnrInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'pendingKycQnrInquiry', req);
  }

  /**
   * 審核KYC問卷
   * @param {object} req 審核KYC問卷Req
   * @returns {object} 審核KYC問卷Res
   */
  checkKycQnr(req: CheckKycQnrReq): Observable<CheckKycQnrRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'checkKycQnr', req);
  }

  /**
   * 查詢KYC問卷紀錄
   * @param {object} req 查詢KYC問卷紀錄Req
   * @returns {object} 查詢KYC問卷紀錄Res
   */
  kycQnrLogInquiry(req: KycQnrLogInquiryReq): Observable<KycQnrInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'kycQnrLogInquiry', req);
  }
}
