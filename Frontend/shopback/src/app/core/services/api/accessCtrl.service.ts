import { UpdateFunctionGroupRes } from './../../../model/accessCtrl/updatefunctionGroup/updateFunctionGroupRes';
import { FunctionInquiryRes } from './../../../model/accessCtrl/functionInquiry/functionInquiryRes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FunctionGroupInfoReq } from 'src/app/model/accessCtrl/functionGroupInfo/functionGroupInfoReq';
import { FunctionGroupInfoRes } from 'src/app/model/accessCtrl/functionGroupInfo/functionGroupInfoRes';
import { FunctionGroupInquiryReq } from 'src/app/model/accessCtrl/functionGroupInquiry/functionGroupInquiryReq';
import { FunctionGroupInquiryRes } from 'src/app/model/accessCtrl/functionGroupInquiry/functionGroupInquiryRes';
import { FunctionGroupSelectReq } from 'src/app/model/accessCtrl/functionGroupSelect/functionGroupSelectReq';
import { FunctionGroupSelectRes } from 'src/app/model/accessCtrl/functionGroupSelect/functionGroupSelectRes';
import { FunctionInquiryReq } from 'src/app/model/accessCtrl/functionInquiry/functionInquiryReq';
import { GroupInquiryReq } from 'src/app/model/accessCtrl/groupInquiry/groupInquiryReq';
import { GroupInquiryRes } from 'src/app/model/accessCtrl/groupInquiry/groupInquiryRes';
import { NewGroupReq } from 'src/app/model/accessCtrl/newGroup/newGroupReq';
import { NewGroupRes } from 'src/app/model/accessCtrl/newGroup/newGroupRes';
import { NewUserReq } from 'src/app/model/accessCtrl/newUser/newUserReq';
import { NewUserRes } from 'src/app/model/accessCtrl/newUser/newUserRes';
import { UpdateFunctionGroupReq } from 'src/app/model/accessCtrl/updatefunctionGroup/updateFunctionGroupReq';
import { UpdateGroupReq } from 'src/app/model/accessCtrl/updateGroup/updateGroupReq';
import { UpdateGroupRes } from 'src/app/model/accessCtrl/updateGroup/updateGroupRes';
import { UpdateUserReq } from 'src/app/model/accessCtrl/updateUser/updateUserReq';
import { UpdateUserRes } from 'src/app/model/accessCtrl/updateUser/updateUserRes';
import { UserInfoReq } from 'src/app/model/accessCtrl/userInfo/userInfoReq';
import { UserInfoRes } from 'src/app/model/accessCtrl/userInfo/userInfoRes';
import { UserInquiryReq } from 'src/app/model/accessCtrl/userInquiry/userInquiryReq';
import { UserInquiryRes } from 'src/app/model/accessCtrl/userInquiry/userInquiryRes';
import { HttpClientService } from './http-client.service';

/**
 * accessCtr 相關方法
 *
 * @class AccessCtrlService
 */
@Injectable({
  providedIn: 'root',
})
export class AccessCtrlService {
  constructor(private HttpClients: HttpClientService) {}

  apiUrl = 'accessCtrl/';

  /**
   * 查詢信託管理後台所有群組產出列表供前端資料顯示
   *
   * @param {object} req - 群組查詢 req
   * @returns {object} - 群組查詢 res
   */
  groupInquiry(req: GroupInquiryReq): Observable<GroupInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'groupInquiry', req);
  }

  /**
   * 提供新增群組
   *
   * @param {object} req - 新增群組 req
   * @returns {object} 新增群組 res
   */
  newGroup(req: NewGroupReq): Observable<NewGroupRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newGroup', req);
  }

  /**
   * 提供編輯群組名稱
   *
   * @param {object} req - 編輯群組 req
   * @returns {object} 編輯群組 res
   */
  updateGroup(req: UpdateGroupReq): Observable<UpdateGroupRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateGroup', req);
  }

  /**
   * 查詢人員列表
   *
   * @param {object} req - 查詢人員列表 req
   * @returns {object} 查詢人員列表 res
   */
  userInquiry(req: UserInquiryReq): Observable<UserInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'userInquiry', req);
  }

  /**
   * 提供查詢信託管理後台單筆使用者資料
   *
   * @param {object} req - 單筆人員資料 req
   * @returns {object} 單筆人員資料 res
   */
  userInfo(req: UserInfoReq): Observable<UserInfoRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'userInfo', req);
  }

  /**
   * 提供新增信託管理後台使用者的資料
   *
   * @param {object} req - 新增人員資料 req
   * @returns {object} 新增人員資料 res
   */
  newUser(req: NewUserReq): Observable<NewUserRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'newUser', req);
  }

  /**
   * 提供異動編輯信託管理後台使用者資料
   *
   * @param {object} req - 編輯人員資料 req
   * @returns {object} 編輯人員資料 res
   */
  updateUser(req: UpdateUserReq): Observable<UpdateUserRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateUser', req);
  }

  /**
   * 提供查詢群組功能權限表
   *
   * @param {object} req - 查詢群組功能權限 req
   * @returns {object} 查詢群組功能權限 res
   */
  functionGroupInquiry(
    req: FunctionGroupInquiryReq
  ): Observable<FunctionGroupInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'functionGroupInquiry', req);
  }

  /**
   * 提供查詢單筆群組權限功能
   *
   * @param {object} req - 群組功能權限資料 req
   * @returns {object} 群組功能權限資料 res
   */
  functionGroupInfo(
    req: FunctionGroupInfoReq
  ): Observable<FunctionGroupInfoRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'functionGroupInfo', req);
  }

  /**
   * 提供群組功能權限下拉功能選單資料
   *
   * @param {object} req - 群組功能權限選單資料 req
   * @returns {object} 群組功能權限選單資料 res
   */
  functionGroupSelect(
    req: FunctionGroupSelectReq
  ): Observable<FunctionGroupSelectRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'functionGroupSelect', req);
  }

  /**
   * 提供編輯角色群組權限
   *
   * @param {object} req - 編輯群組功能權限 req
   * @returns {object} 編輯群組功能權限 res
   */
  updateFunctionGroup(
    req: UpdateFunctionGroupReq
  ): Observable<UpdateFunctionGroupRes> {
    return this.HttpClients.postAPI(this.apiUrl + 'updateFunctionGroup', req);
  }
  /**
   * 提供功能選單資料
   *
   * @param {object} req - 功能選單資料 req
   * @returns {object} 功能選單資料 res
   */
  functionInquiry(req: FunctionInquiryReq): Observable<FunctionInquiryRes[]> {
    return this.HttpClients.postAPI(this.apiUrl + 'functionInquiry', req);
  }
}
