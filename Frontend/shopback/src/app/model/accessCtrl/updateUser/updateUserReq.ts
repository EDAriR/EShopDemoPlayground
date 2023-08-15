/**
 * API 編輯人員資料 req
 */
export interface UpdateUserReq {
  userId: string;
  userName: string;
  userEmail: string;
  groupId: string;
  userStatus?: string;
}
