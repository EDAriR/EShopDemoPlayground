import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSortService {

  constructor() { }
  /**
   * @description 依造維護時間、建立時間做資料排序
   * @param result 需要做時間排序的陣列資料
   * @returns {Array<any>} 完成時間排序陣列資料
   */
  timeSort(result: Array<any>): any {
    result.sort(function( ArrayX , ArrayY ){
      const compareVariableArrayX = ArrayX.updateTime || ArrayX.createTime || ArrayX.applyTime;
      const compareVariableArrayY = ArrayY.updateTime || ArrayY.createTime || ArrayY.applyTime;
      if( compareVariableArrayX > compareVariableArrayY){
        return -1
      }else if( compareVariableArrayX < compareVariableArrayY){
        return 1
      }else {
        return 0
      }
    })
    return result
  }
}
