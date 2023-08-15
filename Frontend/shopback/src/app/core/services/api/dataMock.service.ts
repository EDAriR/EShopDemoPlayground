import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

/**
 * MOCK API 相關方法
 *
 * @class DataMockService
 */
@Injectable({
  providedIn: 'root',
})
export class DataMockService {
  constructor(private HttpClients: HttpClientService) {}

  getWeb000001(): any {
    return this.HttpClients.getJson('web000001');
  }
  getWeb010101(): any {
    return this.HttpClients.getJson('web010101');
  }
  getWeb010201(): any {
    return this.HttpClients.getJson('web010201');
  }
  getWeb010301(): any {
    return this.HttpClients.getJson('web010301');
  }
  getWeb010401(): any {
    return this.HttpClients.getJson('web010401');
  }
  getWeb010402(): any {
    return this.HttpClients.getJson('web010402');
  }
  getWeb010403(): any {
    return this.HttpClients.getJson('web010403');
  }
  getWeb010501(): any {
    return this.HttpClients.getJson('web010501');
  }
  getWeb010601(): any {
    return this.HttpClients.getJson('web010601');
  }
  getWeb010602(): any {
    return this.HttpClients.getJson('web010602');
  }
  getWeb020101(): any {
    return this.HttpClients.getJson('web020101');
  }
  getWeb020102(): any {
    return this.HttpClients.getJson('web020102');
  }
  getWeb020201(): any {
    return this.HttpClients.getJson('web020201');
  }
  getWeb020301(): any {
    return this.HttpClients.getJson('web020301');
  }
  getWeb020401(): any {
    return this.HttpClients.getJson('web020401');
  }
  getWeb020402(): any {
    return this.HttpClients.getJson('web020402');
  }
  getWeb020501(): any {
    return this.HttpClients.getJson('web020501');
  }
  getWeb020601(): any {
    return this.HttpClients.getJson('web020601');
  }
  getWeb020801(): any {
    return this.HttpClients.getJson('web020801');
  }
  getWeb030101(): any {
    return this.HttpClients.getJson('web030101');
  }
  getWeb030102(): any {
    return this.HttpClients.getJson('web030102');
  }
  getWeb030103(): any {
    return this.HttpClients.getJson('web030103');
  }
  postWeb030104(req: any): any {
    return this.HttpClients.postJson('web030104', req);
  }
  getWeb030105(): any {
    return this.HttpClients.getJson('web030105');
  }
  getWeb030201(): any {
    return this.HttpClients.getJson('web030201');
  }
  getWeb030202(): any {
    return this.HttpClients.getJson('web030202');
  }
  getWeb030203(): any {
    return this.HttpClients.getJson('web030203');
  }
  getWeb030301(): any {
    return this.HttpClients.getJson('web030301');
  }
  getWeb030302(): any {
    return this.HttpClients.getJson('web030302');
  }
  postWeb030303(req: any): any {
    return this.HttpClients.postJson('web030303', req);
  }
  postWeb030304(req: any): any {
    return this.HttpClients.postJson('web030304', req);
  }

  postWeb030305(req: any): any {
    return this.HttpClients.postJson('web030305', req);
  }
  postWeb040201(req: any): any {
    return this.HttpClients.postJson('web040201', req);
  }
  getWeb050101(): any {
    return this.HttpClients.getJson('web050101');
  }
  getWeb050102(): any {
    return this.HttpClients.getJson('web050102');
  }
  getWeb050301(): any {
    return this.HttpClients.getJson('web050301');
  }
  getWeb050302(): any {
    return this.HttpClients.getJson('web050302');
  }
  getWeb050303(): any {
    return this.HttpClients.getJson('web050303');
  }
  getWeb050304(): any {
    return this.HttpClients.getJson('web050304');
  }
  getWeb050306(): any {
    return this.HttpClients.getJson('web050306');
  }
  getWeb050401(): any {
    return this.HttpClients.getJson('web050401');
  }
  getWeb050501(): any {
    return this.HttpClients.getJson('web050501');
  }
  postWeb060101(req: any): any {
    return this.HttpClients.postJson('web060101', req);
  }
  getWeb060102(): any {
    return this.HttpClients.getJson('web060102');
  }
  getWeb060103(): any {
    return this.HttpClients.getJson('web060103');
  }
  getWeb060104(): any {
    return this.HttpClients.getJson('web060104');
  }
  getWeb060201(): any {
    return this.HttpClients.getJson('web060201');
  }
  getWeb060301(): any {
    return this.HttpClients.getJson('web060301');
  }
  getWeb060302(): any {
    return this.HttpClients.getJson('web060302');
  }
  getWeb060303(): any {
    return this.HttpClients.getJson('web060303');
  }
  getWeb060304(): any {
    return this.HttpClients.getJson('web060304');
  }
  getWeb060305(): any {
    return this.HttpClients.getJson('web060305');
  }
  getWeb060401(): any {
    return this.HttpClients.getJson('web060401');
  }
  getWeb060501(): any {
    return this.HttpClients.getJson('web060501');
  }
  getWeb070101(): any {
    return this.HttpClients.getJson('web070101');
  }
  getWeb070102(): any {
    return this.HttpClients.getJson('web070102');
  }
  getWeb070103(): any {
    return this.HttpClients.getJson('web070103');
  }
  getWeb070201(): any {
    return this.HttpClients.getJson('web070201');
  }
  getWeb070202(res: number): any {
    return this.HttpClients.getJson('web070202');
  }
  getWeb070301(): any {
    return this.HttpClients.getJson('web070301');
  }
  getWeb070302(): any {
    return this.HttpClients.getJson('web070302');
  }
  postWeb080101(req: any): any {
    return this.HttpClients.postJson('web080101', req);
  }
  postWeb080102(req: any): any {
    return this.HttpClients.postJson('web080102', req);
  }
  postWeb080201(req: any): any {
    return this.HttpClients.postJson('web080201', req);
  }
  postWeb080202(req: any): any {
    return this.HttpClients.postJson('web080202', req);
  }
  getWeb080301(): any {
    return this.HttpClients.getJson('web080301');
  }
  getWeb080601(): any {
    return this.HttpClients.getJson('web080601');
  }
  getWeb090101(): any {
    return this.HttpClients.getJson('web090101');
  }
  getWeb090201(): any {
    return this.HttpClients.getJson('web090201');
  }
  getWeb090301(): any {
    return this.HttpClients.getJson('web090301');
  }
  getWeb090401(): any {
    return this.HttpClients.getJson('web090401');
  }
  getWeb090402(): any {
    return this.HttpClients.getJson('web090402');
  }
  getWeb090403(): any {
    return this.HttpClients.getJson('web090403');
  }
  getWeb090501(): any {
    return this.HttpClients.getJson('web090501');
  }
  postWeb090601(req: any): any {
    return this.HttpClients.postJson('web090601', req);
  }
  getWeb090701(): any {
    return this.HttpClients.getJson('web090701');
  }
  getWeb100201(): any {
    return this.HttpClients.getJson('web100201');
  }
  getWeb100202(): any {
    return this.HttpClients.getJson('web100202');
  }
  getWeb100301(): any {
    return this.HttpClients.getJson('web100301');
  }
  getWeb100302(): any {
    return this.HttpClients.getJson('web100302');
  }
  getWeb100303(): any {
    return this.HttpClients.getJson('web100303');
  }
  getWeb100304(): any {
    return this.HttpClients.getJson('web100304');
  }
  getWeb100305(): any {
    return this.HttpClients.getJson('web100305');
  }
  getWeb100306(): any {
    return this.HttpClients.getJson('web100306');
  }
  getWeb100307(): any {
    return this.HttpClients.getJson('web100307');
  }
  getWeb100308(): any {
    return this.HttpClients.getJson('web100308');
  }
  getWeb100311(): any {
    return this.HttpClients.getJson('web100311');
  }
  getWeb100312(): any {
    return this.HttpClients.getJson('web100312');
  }
  getWeb100313(): any {
    return this.HttpClients.getJson('web100313');
  }
  getWeb100399(): any {
    return this.HttpClients.getJson('web100399');
  }
  getWeb100310(): any {
    return this.HttpClients.getJson('web100310');
  }
  getWeb100401(): any {
    return this.HttpClients.getJson('web100401');
  }
  getWeb100501(): any {
    return this.HttpClients.getJson('web100501');
  }

  postWeb100202(req: any): any {
    return this.HttpClients.postJson('web100202', req);
  }

  postWeb050101(req: any): any {
    return this.HttpClients.postJson('web050101', req);
  }

  postWeb050102(req: any): any {
    return this.HttpClients.postJson('web050102', req);
  }

  postWeb050103(req: any): any {
    return this.HttpClients.postJson('web050103', req);
  }

  postWeb050301(req: any): any {
    return this.HttpClients.postJson('web050301', req);
  }

  postWeb050305(req: any): any {
    return this.HttpClients.postJson('web050305', req);
  }

  postWeb070101(req: any): any {
    return this.HttpClients.postJson('web070101', req);
  }

  postWeb070102(req: any): any {
    return this.HttpClients.postJson('web070102', req);
  }

  postWeb070202(req: any): any {
    return this.HttpClients.postJson('web070202', req);
  }

  postWeb070301(req: any): any {
    return this.HttpClients.postJson('web070301', req);
  }

  postWeb070302(req: any): any {
    return this.HttpClients.postJson('web070302', req);
  }

  postWeb090101(req: any): any {
    return this.HttpClients.postJson('web090101', req);
  }

  postWeb090201(req: any): any {
    return this.HttpClients.postJson('web090201', req);
  }

  postWeb090401(req: any): any {
    return this.HttpClients.postJson('web090401', req);
  }

  postWeb100201(req: any): any {
    return this.HttpClients.postJson('web100201', req);
  }

  postWeb000002(req: any): any {
    return this.HttpClients.postJson('web000002', req);
  }

  postWeb100402(req?: any): any {
    return this.HttpClients.postJson('web100402', req);
  }

  postWeb100403(req: any): any {
    return this.HttpClients.postJson('web100403', req);
  }

  postWeb100404(req: any): any {
    return this.HttpClients.postJson('web100404', req);
  }

  postWeb100501(req: any): any {
    return this.HttpClients.postJson('web100501', req);
  }

  postWeb100503(req: any): any {
    return this.HttpClients.postJson('web100503', req);
  }

  postWeb090402(req: any): any {
    return this.HttpClients.postJson('web100201', req);
  }

  postCsv020100(file: File): any {
    return this.HttpClients.uploadCsv('web020100', file);
  }
  postWeb020101(req: any): any {
    return this.HttpClients.postJson('web020101', req);
  }
}
