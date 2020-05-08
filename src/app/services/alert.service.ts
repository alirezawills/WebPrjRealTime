import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

constructor(public alertManage: ToastrService) { }

showAlert(next)
{
  if (next.rsl)
  {
    this.alertManage.success(next.message);
    return;
  }
  else
  {
    this.alertManage.error(next.message, 'خطا');
    return;
  }

  this.alertManage.warning(next.message);
}
}
