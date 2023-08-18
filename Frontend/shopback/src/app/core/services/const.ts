import { Injectable } from '@angular/core';
import { CustomValidator } from '../utils/validate';

@Injectable({
  providedIn: 'root',
})
export class Const {
  public static apiResSuccessCode = '0000';
  public static save = '儲存';
  public static review = '送審';
  public static productLabel = '選擇產品標籤';
  public static group = '選擇群組';
  public static customerLabel = '選擇客戶標籤';
  public static examinationPassed = '通過';
  public static release = '放行';
  public static auditFailure = '退件';

  public static pageLabel = '每頁筆數：';
  public static nextPage = '下一頁';
  public static previousPage = '上一頁';

  public static dateTime = 'YYYYMMDDhhmmss';
  public static utc8 = '+08:00';

  public static userStatusActive = 'Y';
  public static userStatusLocked = 'N';

  /**
   * @description 自定義驗證-輸入欄位驗證英文、數字規則
   */
  public static enNum = CustomValidator.enNumValidator;
  /**
   * @description 自定義驗證-輸入欄位驗證中文、英文、數字規則
   */
  public static cnEnNum = CustomValidator.cnEnNumNoPunValidator;
  /**
   * @description 自定義驗證-輸入欄位驗證中文、英文、數字、含特殊符號(，。! ?空白鍵)
   */
  public static cnEnNumPun = CustomValidator.cnEnNumHasPunValidator;
  /**
   * 自定義驗證-輸入欄位不能都是空白鍵
   */
  public static noWhiteSpace = CustomValidator.noWhitespaceValidator;

  /**
   * @description ApprovalStatusPipe用，轉換欄位參數
   */
  public static statusZero = '0';
  public static statusOne = '1';
  public static statusTwo = '2';
  public static statusThree = '3';

  public static edit = '編輯中';
  public static pendingReview = '待審核';
  public static refuse = '退件';
  public static reviewed = '已審閱';

  public static sendNotification ='發送通知';


  constructor() {}
}
