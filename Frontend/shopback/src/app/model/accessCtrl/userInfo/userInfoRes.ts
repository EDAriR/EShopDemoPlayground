import { UserInquiryRes } from "../userInquiry/userInquiryRes";

/**
 * API 單筆人員資料 res
 *
 * @extends UserInquiryRes 查詢人員列表res
 */
export interface UserInfoRes extends UserInquiryRes {
  loginIp?: string;
  loginTime?: string;
  logoffTime?: string;
  lastLoginTime?: string;
  lastLoginIp?: string;
}
