import { DatesPipe } from './dates.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalStatusPipe } from './approval-status.pipe';
import { HtmlFormatPipe } from './htmlFormat.pipe';
import { AuthStatusPipe } from './auth-status.pipe';
import { DisplayStatusPipe } from './display-status.pipe';
import { QuestionNumberPipe } from './question-number.pipe';
import { RiskLevelPipe } from './risk-level.pipe';
import { TimePipe } from './time.pipe';
import { QaTypeStatusPipe } from './qa-type-status.pipe';
import { UserStatusPipe } from './user-status.pipe'
import { RecomndClsfyIdPipe } from './recomnd-clsfy-id.pipe';


@NgModule({
  declarations: [
    HtmlFormatPipe,
    ApprovalStatusPipe,
    AuthStatusPipe,
    DisplayStatusPipe,
    QuestionNumberPipe,
    RiskLevelPipe,
    TimePipe,
    QaTypeStatusPipe,
    UserStatusPipe,
    RecomndClsfyIdPipe,
    DatesPipe
  ],
  imports: [CommonModule],
  exports: [
    HtmlFormatPipe,
    ApprovalStatusPipe,
    AuthStatusPipe,
    DisplayStatusPipe,
    QuestionNumberPipe,
    RiskLevelPipe,
    TimePipe,
    QaTypeStatusPipe,
    UserStatusPipe,
    RecomndClsfyIdPipe,
    DatesPipe
  ],
})
export class PipeModule {}
