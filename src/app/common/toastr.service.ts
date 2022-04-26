import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastService {
  success(msg: string, title?: string) {
    toastr.success(msg);
  }

  info(msg: string, title?: string) {
    toastr.info(msg);
  }

  warning(msg: string, title?: string) {
    toastr.warning(msg);
  }

  error(msg: string, title?: string) {
    toastr.error(msg);
  }
}
