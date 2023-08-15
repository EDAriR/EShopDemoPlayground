import { WfmDocInquiryRes } from './../../../model/wfmDoc/wfmDocInquiry/wfmDocInquiryRes';
import { WfmDocInquiryReq } from './../../../model/wfmDoc/wfmDocInquiry/wfmDocInquiryReq';
import { WfmDocLogInquiryReq } from './../../../model/wfmDoc/wfmDocLogInquiry/wfmDocLogInquiryReq';
import { WfmDocLogInquiryRes } from './../../../model/wfmDoc/wfmDocLogInquiry/wfmDocLogInquiryRes';
import { PendingwfmDocRes } from './../../../model/wfmDoc/pendingwfmDoc/pendingwfmDocRes';
import { PendingwfmDocReq } from './../../../model/wfmDoc/pendingwfmDoc/pendingwfmDocReq';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WfmDocService {
  constructor(private HttpClients: HttpClientService) { }

  apiUrl = 'wfmDoc/';
  /**
   * 查詢信託文件
   * @param req
   * @returns
   */
  wfmDocInquiry(req: WfmDocInquiryReq): Observable<WfmDocInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'wfmDocInquiry', req);
  }

  /**
   * 查詢信託文件記錄
   * @param req
   * @returns
   */
  wfmDocLogInquiry(req: WfmDocLogInquiryReq): Observable<WfmDocLogInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'wfmDocLogInquiry', req);
  }

  /**
   * 查詢待審信託文件
   * @param req
   * @returns
   */
  pendingWfmDocInquiry(req:PendingwfmDocReq):Observable<PendingwfmDocRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'pendingWfmDoc', req);
  }
}
