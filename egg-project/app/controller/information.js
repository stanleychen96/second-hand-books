'use strict';

module.exports = app => {
  class InformationController extends app.Controller {
    // * create() {
    //   this.ctx.body = yield this.service.userinfo.create(this.ctx.request.body);
    // }
    // * delete() {
    //   this.ctx.body = yield this.service.userinfo.delete(this.ctx.request.body);
    // }
    * get() {
      this.ctx.body = yield this.service.userinfo.get(this.ctx.request.body);
    }
    // * update() {
    //   this.ctx.body = yield this.service.userinfo.update(this.ctx.request.body);
    // }
    // * select() {
    //   this.ctx.body = yield this.service.userinfo.select(this.ctx.request.body);
    // }
  }
  return InformationController;
};
