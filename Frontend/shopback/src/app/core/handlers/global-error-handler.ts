import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../services/api/error.service';
import { NGXLogger } from 'ngx-logger';
@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorService: ErrorService,
    private logger: NGXLogger
  ) { }
  handleError(error: Error | HttpErrorResponse): void {
    let message: string;
    let stackTrace: string;
    if (error instanceof HttpErrorResponse) {
      // Server Error
      message = this.errorService.getServerMessage(error);
      stackTrace = this.errorService.getServerStack(error);
      console.log(message);
    } else {
      // Client Error
      message = this.errorService.getClientMessage(error);
      stackTrace = this.errorService.getClientStack(error);
      console.log(message);
    }
    console.error(error);
     // Always log errors
    this.logger.error(error);
  }
}
