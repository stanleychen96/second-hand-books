'use strict';

module.exports = app => {
  class LeadController extends app.Controller {
    // * create() {
    //   this.ctx.body = yield this.service.bookreview.create(this.ctx.request.body);
    // }
    // * delete() {
    //   this.ctx.body = yield this.service.bookreview.delete(this.ctx.request.body);
    // }
    * get() {
      this.ctx.body = yield this.service.bookreview.get(this.ctx.request.body);
    }
    // * update() {
    //   this.ctx.body = yield this.service.bookreview.update(this.ctx.request.body);
    // }
    // * select() {
    //   this.ctx.body = yield this.service.bookreview.select(this.ctx.request.body);
    // }

  }
  return LeadController;
};
