import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  /*文件管理 / 文件維護 編輯頁*/
  static documentMaintenance = 'dashboard/n080100/n080103';

  /*投資小問題 / 投資小問題題目 編輯頁 */
  static investmentQaMaintenance = 'dashboard/n070100/n070105';

  /*投資小問題 / 投資小問題題目查詢 查詢頁*/
  static investmentQa = 'dashboard/n070200/n070202';

  /*投資小問題 / 投資小問題題目查詢 查詢頁*/
  static ivsQnrLogInquiry = 'dashboard/n070500/n070502';
  /* 投資小問題問卷管理 / 投資小問題問卷維護 首頁 */
  static ivsQnrUrl = 'dashboard/n070300';

  /*投資組合管理 / 目標差異參數維護 編輯頁*/
  static goalWeightMaintenance = 'dashboard/n010100/n010101';
  /*投資組合管理 / 投資組合維護 編輯頁*/
  static portfolioMaintenance = 'dashboard/n010400/n010402';
  /*投資組合管理 / 投資組合查詢 編輯頁*/
  static investmentInquiry = 'dashboard/n010600/n010602';

  /*推薦產品管理 / 推薦產品維護 查詢頁*/
  static productInquiry = 'dashboard/n020100';
  /*推薦產品管理 / 推薦產品維護 編輯頁*/
  static productMaintenance = 'dashboard/n020100/n020102';
  /*推薦產品管理 / 推薦產品審核 審核頁*/
  static productReview = 'dashboard/n020200/n020201';

  /*推薦產品管理 / 推薦產品查詢 查詢頁*/
  static productLogInquiry = 'dashboard/n020300';
  /*推薦產品管理 / 推薦產品查詢 編輯頁*/
  static productLookup = 'dashboard/n020300/n020301';

  /* 客戶標籤管理 / 客戶標籤維護 編輯頁*/
  static tagMaintenance = 'dashboard/n030100/n030103';
  /* 客戶標籤管理 / 客戶標籤審核 審核頁*/
  static tagReview = 'dashboard/n030200/n030201';
  /*客戶標籤管理 / 客戶標籤查詢 查詢頁*/
  static tagInquiry = 'dashboard/n030300/n030301';

  /*客戶查詢 / KYC問卷客戶軌跡查詢 編輯頁*/
  static kycTrackQuery = 'dashboard/n090100/n090102';

  /* KYC問卷管理 / KYC題目維護 新增頁 */
  static kycQustNew = '/dashboard/n060100/n060102';

  /* KYC問卷管理 / KYC題目維護 編輯頁 */
  static kycQustMaintenance = 'dashboard/n060100/n060103';

  /* KYC問卷管理 / KYC題目查詢 查詢明細頁 */
  static kycQustInquiry = 'dashboard/n060200/n060202';

  /* KYC問卷管理 / KYC問卷維護 首頁 */
  static kycQnrUrl = 'dashboard/n060300';

  /* KYC問卷管理 / KYC問卷維護 編輯頁 */
  static kycQnrMaintenance = 'dashboard/n060300/n060303';

  /* KYC問卷管理 / KYC問卷審核 審核頁 */
  static kycQnrReview = 'dashboard/n060400/n060402';

  /* KYC問卷管理 / KYC問卷查詢 查詢明細頁 */
  static kycQnrInquiry = 'dashboard/n060500/n060502';

  /* 投資小問題 / 投資小問題題目維護 新增頁 */
  static ivsQustNew = '/dashboard/n070100/n070102';

  /* 投資小問題 / 投資小問題題目維護 編輯頁 */
  static ivsQustMaintenance = '/dashboard/n070100/n070105';

  /*管理設定 / KYC問卷題目類別維護*/
  static kycCategoryUrl = '/n100100';
  /*管理設定 / KYC問卷題目類別維護 新增頁*/
  static kycCategoryNew = '/dashboard/n100100/n100101';
  /*管理設定 / KYC問卷題目類別維護 編輯頁*/
  static kycCategoryMaintenance = 'dashboard/n100100/n100102';

  /*管理設定 / 投資問題題目類別維護*/
  static maintenanceOfInvestmentTopicCategoriesUrl = '/n100200';
  /*管理設定 / 投資問題題目類別維護 編輯頁*/
  static maintenanceOfInvestmentTopicCategories = 'dashboard/n100200/n100202';

  /*管理設定 / 文件代碼名稱維護*/
  static fileCodeNameMaintenanceUrl = '/n100300';
  /*管理設定 / 文件代碼名稱維護 新增頁*/
  static fileCodeNameNew = '/dashboard/n100300/n100302';
  /*管理設定 / 文件代碼名稱維護 編輯頁*/
  static fileCodeNameMaintenance = 'dashboard/n100300/n100303';

  /*管理設定 / 投組風險等級維護*/
  static portfolioRiskLevelMaintenanceUrl = '/n100400';
  /*管理設定 / 投組風險等級維護 新增頁*/
  static portfolioRiskLevelNew = '/dashboard/n100400/n100402';
  /*管理設定 / 投組風險等級維護 編輯頁*/
  static portfolioRiskLevelMaintenance = 'dashboard/n100400/n100403';

  /*管理設定 / 投組投資風格維護*/
  static portfolioStyleMaintenanceUrl = '/n100500';

  /*管理設定 / 投組投資風格維護 新增頁*/
  static portfolioStyleNew = '/dashboard/n100500/n100502';

  /*管理設定 / 投組投資風格維護 編輯頁*/
  static portfolioStyleMaintenance = 'dashboard/n100500/n100503';

  /*管理設定 / 客戶標籤類別維護*/
  static customerTagCategoryMaintenanceUrl = '/n100600';
  /*管理設定 / 客戶標籤類別維護 新增頁*/
  static customerTagCategoryNew = '/dashboard/n100600/n100603';
  /*管理設定 / 客戶標籤類別維護 編輯頁*/
  static customerTagCategoryMaintenance = 'dashboard/n100600/n100602';

  /*管理設定 / 產品標籤類別維護*/
  static productLabelCategoryMaintenanceUrl = '/n100700';
  /*管理設定 / 產品標籤類別維護 編輯頁*/
  static productLabelCategoryMaintenance = 'dashboard/n100700/n100703';

  /*權限管理 / 群組維護  */
  static groupMaintenanceUrl = '/n110100';
  /*權限管理 / 群組維護 編輯頁 */
  static groupMaintenance = 'dashboard/n110100/n110103';

  /*權限管理 / 群組功能管理*/
  static groupFunctionMaintenanceUrl = '/n110301';
  /*權限管理 / 群組功能管理 編輯頁*/
  static groupFunctionMaintenance = 'dashboard/n110300/n110302';

  /*權限管理 / 人員維護 */
  static personnelMaintenanceUrl = '/n110400';
  /*權限管理 / 人員維護 編輯頁 */
  static personnelMaintenance = 'dashboard/n110400/n110404';

  /*權限管理 / 人員查詢 編輯頁 */
  static personnelQuery = 'dashboard/n110500/n110503';

  constructor() {}
}
