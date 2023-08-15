import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustTagClsfyInquiryReq } from 'src/app/model/refInfo/custTagClsfyInquiry/custTagClsfyInquiryReq';
import { DocCodeInquiryReq } from 'src/app/model/refInfo/docCodeInquiry/docCodeInquiryReq';
import { DocCodeInquiryRes } from 'src/app/model/refInfo/docCodeInquiry/docCodeInquiryRes';
import { IvsLevelInquiryReq } from 'src/app/model/refInfo/ivsLevelInquiry/ivsLevelInquiryReq';
import { IvsLevelInquiryRes } from 'src/app/model/refInfo/ivsLevelInquiry/ivsLevelInquiryRes';
import { IvsQustClsfyInquiryReq } from 'src/app/model/refInfo/ivsQustClsfyInquiry/ivsQustClsfyInquiryReq';
import { IvsQustClsfyInquiryRes } from 'src/app/model/refInfo/ivsQustClsfyInquiry/ivsQustClsfyInquiryRes';
import { IvsStyleInquiryReq } from 'src/app/model/refInfo/ivsStyleInquiry/ivsStyleInquiryReq';
import { KycQustClsfyInquiryReq } from 'src/app/model/refInfo/kycQustClsfyInquiry/kycQustClsfyInquiryReq';
import { KycQustClsfyInquiryRes } from 'src/app/model/refInfo/kycQustClsfyInquiry/kycQustClsfyInquiryRes';
import { NewCustTagClsfyReq } from 'src/app/model/refInfo/newCustTagClsfy/newCustTagClsfyReq';
import { NewCustTagClsfyRes } from 'src/app/model/refInfo/newCustTagClsfy/newCustTagClsfyRes';
import { NewDocCodeReq } from 'src/app/model/refInfo/newDocCode/newDocCodeReq';
import { NewDocCodeRes } from 'src/app/model/refInfo/newDocCode/newDocCodeRes';
import { NewIvsLevelReq } from 'src/app/model/refInfo/newIvsLevel/newIvsLevelReq';
import { NewIvsLevelRes } from 'src/app/model/refInfo/newIvsLevel/newIvsLevelRes';
import { NewIvsQustClsfyReq } from 'src/app/model/refInfo/newIvsQustClsfy/newIvsQustClsfyReq';
import { NewIvsQustClsfyRes } from 'src/app/model/refInfo/newIvsQustClsfy/newIvsQustClsfyRes';
import { NewIvsStyleReq } from 'src/app/model/refInfo/newIvsStyle/newIvsStyleReq';
import { NewIvsStyleRes } from 'src/app/model/refInfo/newIvsStyle/newIvsStyleRes';
import { NewKycQustClsfyReq } from 'src/app/model/refInfo/newKycQustClsfy/newKycQustClsfyReq';
import { NewKycQustClsfyRes } from 'src/app/model/refInfo/newKycQustClsfy/newKycQustClsfyRes';
import { NewPrdTagClsfyReq } from 'src/app/model/refInfo/newPrdTagClsfy/newPrdTagClsfyReq';
import { NewPrdTagClsfyRes } from 'src/app/model/refInfo/newPrdTagClsfy/newPrdTagClsfyRes';
import { PrdTagClsfyInquiryReq } from 'src/app/model/refInfo/prdTagClsfyInquiry/prdTagClsfyInquiryReq';
import { PrdTagClsfyInquiryRes } from 'src/app/model/refInfo/prdTagClsfyInquiry/prdTagClsfyInquiryRes';
import { UpdateCustTagClsfyReq } from 'src/app/model/refInfo/updateCustTagClsfy/updateCustTagClsfyReq';
import { UpdateCustTagClsfyRes } from 'src/app/model/refInfo/updateCustTagClsfy/updateCustTagClsfyRes';
import { UpdateDocCodeReq } from 'src/app/model/refInfo/updateDocCode/updateDocCodeReq';
import { UpdateDocCodeRes } from 'src/app/model/refInfo/updateDocCode/updateDocCodeRes';
import { UpdateIvsLevelReq } from 'src/app/model/refInfo/updateIvsLevel/updateIvsLevelReq';
import { UpdateIvsLevelRes } from 'src/app/model/refInfo/updateIvsLevel/updateIvsLevelRes';
import { UpdateIvsQustClsfyReq } from 'src/app/model/refInfo/updateIvsQustClsfy/updateIvsQustClsfyReq';
import { UpdateIvsQustClsfyRes } from 'src/app/model/refInfo/updateIvsQustClsfy/updateIvsQustClsfyRes';
import { UpdateIvsStyleReq } from 'src/app/model/refInfo/updateIvsStyle/updateIvsStyleReq';
import { UpdateIvsStyleRes } from 'src/app/model/refInfo/updateIvsStyle/updateIvsStyleRes';
import { UpdateKycQustClsfyReq } from 'src/app/model/refInfo/updateKycQustClsfy/updateKycQustClsfyReq';
import { UpdateKycQustClsfyRes } from 'src/app/model/refInfo/updateKycQustClsfy/updateKycQustClsfyRes';
import { UpdatePrdTagClsfyReq } from 'src/app/model/refInfo/updatePrdTagClsfy/updatePrdTagClsfyReq';
import { UpdatePrdTagClsfyRes } from 'src/app/model/refInfo/updatePrdTagClsfy/updatePrdTagClsfyRes';
import { HttpClientService } from './http-client.service';

/**
 * refInfo 相關方法
 *
 * @class RefInfoService
 */
@Injectable({
  providedIn: 'root',
})
export class RefInfoService {
  constructor(private HttpClients: HttpClientService) {}

  apiUrl = 'refInfo/';

  /**
   * 提供查詢KYC問卷題目類別
   *
   * @param {object} req - 查詢KYC問卷題目類別 req
   * @returns {object} 查詢KYC問卷題目類別 res
   */
  kycQustClsfyInquiry(
    req: KycQustClsfyInquiryReq
  ): Observable<KycQustClsfyInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'kycQustClsfyInquiry', req);
  }

  /**
   * 提供新增KYC題目類別
   *
   * @param {object} req - 新增KYC題目類別 req
   * @returns {object} 新增KYC題目類別 res
   */
  newKycQustClsfy(req: NewKycQustClsfyReq): Observable<NewKycQustClsfyRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newKycQustClsfy', req);
  }

  /**
   * 提供編輯KYC題目類別
   *
   * @param {object} req - 編輯KYC題目類別 req
   * @returns {object} 編輯KYC題目類別 res
   */
  updateKycQustClsfy(
    req: UpdateKycQustClsfyReq
  ): Observable<UpdateKycQustClsfyRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateKycQustClsfy', req);
  }

  /**
   * 提供查詢投資問題題目類別
   *
   * @param {object} req - 查詢投資問題題目類別 req
   * @returns {object} 查詢投資問題題目類別 res
   */
  ivsQustClsfyInquiry(
    req: IvsQustClsfyInquiryReq
  ): Observable<IvsQustClsfyInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsQustClsfyInquiry', req);
  }

  /**
   * 提供新增投資問題題目類別
   *
   * @param {object} req - 新增投資問題題目類別  req
   * @returns {object} 新增投資問題題目類別  res
   */
  newIvsQustClsfy(req: NewIvsQustClsfyReq): Observable<NewIvsQustClsfyRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newIvsQustClsfy', req);
  }

  /**
   * 提供編輯投資問題題目類別
   *
   * @param {object} req - 編輯投資問題題目類別 req
   * @returns {object} 編輯投資問題題目類別 res
   */
  updateIvsQustClsfy(
    req: UpdateIvsQustClsfyReq
  ): Observable<UpdateIvsQustClsfyRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateIvsQustClsfy', req);
  }

  /**
   * 提供查詢文件代碼名稱
   *
   * @param {object} req - 查詢文件代碼名稱 req
   * @returns {object} 查詢文件代碼名稱 res
   */
  docCodeInquiry(req: DocCodeInquiryReq): Observable<DocCodeInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'docCodeInquiry', req);
  }

  /**
   * 提供新增文件代碼名稱
   *
   * @param {object} req - 新增文件代碼名稱 req
   * @returns {object} 新增文件代碼名稱 res
   */
  newDocCode(req: NewDocCodeReq): Observable<NewDocCodeRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newDocCode', req);
  }

  /**
   * 提供編輯文件代碼名稱
   *
   * @param {object} req - 編輯文件代碼名稱 req
   * @returns {object} 編輯文件代碼名稱 res
   */
  updateDocCode(req: UpdateDocCodeReq): Observable<UpdateDocCodeRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateDocCode', req);
  }

  /**
   * 提供查詢投組風險等級
   *
   * @param {object} req - 查詢投組風險等級 req
   * @returns {object} 查詢投組風險等級 res
   */
  ivsLevelInquiry(req: IvsLevelInquiryReq): Observable<IvsLevelInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsLevelInquiry', req);
  }

  /**
   * 提供新增投組風險等級
   *
   * @param {object} req - 新增投組風險等級 req
   * @returns {object} 新增投組風險等級 res
   */
  newIvsLevel(req: NewIvsLevelReq): Observable<NewIvsLevelRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newIvsLevel', req);
  }

  /**
   * 提供編輯投組風險等級
   *
   * @param {object} req - 編輯投組風險等級 req
   * @returns {object} 編輯投組風險等級 res
   */
  updateIvsLevel(req: UpdateIvsLevelReq): Observable<UpdateIvsLevelRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateIvsLevel', req);
  }

  /**
   * 提供查詢投組投資風格
   *
   * @param {object} req - 查詢投組投資風格 req
   * @returns {object} 查詢投組投資風格 res
   */
  ivsStyleInquiry(req: IvsStyleInquiryReq): any {
    return this.HttpClients.postAPI(this.apiUrl + 'ivsStyleInquiry', req);
  }

  /**
   * 提供新增投組投資風格
   *
   * @param {object} req - 新增投組投資風格 req
   * @returns {object} 新增投組投資風格 res
   */
  newIvsStyle(req: NewIvsStyleReq): Observable<NewIvsStyleRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newIvsStyle', req);
  }

  /**
   * 提供編輯投組投資風格
   *
   * @param {object} req - 編輯投組投資風格  req
   * @returns {object} 編輯投組投資風格  res
   */
  updateIvsStyle(req: UpdateIvsStyleReq): Observable<UpdateIvsStyleRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateIvsStyle', req);
  }

  /**
   * 提供查詢客戶標籤類別
   *
   * @param {object} req - 查詢客戶標籤類別 req
   * @returns {object} 查詢客戶標籤類別 res
   */
  custTagClsfyInquiry(req: CustTagClsfyInquiryReq): any {
    return this.HttpClients.postAPI(this.apiUrl + 'custTagClsfyInquiry', req);
  }
  /**
   * 提供新增客戶標籤類別
   *
   * @param {object} req - 新增客戶標籤類別 req
   * @returns {object} 新增客戶標籤類別 res
   */
  newCustTagClsfy(req: NewCustTagClsfyReq): Observable<NewCustTagClsfyRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newCustTagClsfy', req);
  }
  /**
   * 提供編輯客戶標籤類別
   *
   * @param {object} req - 編輯客戶標籤類別 req
   * @returns {object} 編輯客戶標籤類別 res
   */
  updateCustTagClsfy(
    req: UpdateCustTagClsfyReq
  ): Observable<UpdateCustTagClsfyRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateCustTagClsfy', req);
  }
  /**
   * 提供查詢產品標籤類別
   *
   * @param {object} req - 查詢產品標籤類別 req
   * @returns {object} 查詢產品標籤類別 res
   */
  prdTagClsfyInquiry(
    req: PrdTagClsfyInquiryReq
  ): Observable<PrdTagClsfyInquiryRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'prdTagClsfyInquiry', req);
  }
  /**
   * 提供新增產品標籤類別
   *
   * @param {object} req - 新增產品標籤類別 req
   * @returns {object} 新增產品標籤類別 res
   */
  newPrdTagClsfy(req: NewPrdTagClsfyReq): Observable<NewPrdTagClsfyRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newPrdTagClsfy', req);
  }
  /**
   * 提供編輯產品標籤類別
   *
   * @param {object} req - 編輯產品標籤類別 req
   * @returns {object} 編輯產品標籤類別 res
   */
  updatePrdTagClsfy(
    req: UpdatePrdTagClsfyReq
  ): Observable<UpdatePrdTagClsfyRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updatePrdTagClsfy', req);
  }
}
