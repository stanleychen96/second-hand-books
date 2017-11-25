'use strict';

module.exports = app => {
  class LeadController extends app.Controller {
    // * create() {
    //   this.ctx.body = yield this.service.bookreview.create(this.ctx.request.body);
    // }
    // * delete() {
    //   this.ctx.body = yield this.service.bookreview.delete(this.ctx.request.body);
    // }
    * gettapnumber() {
      this.ctx.body = yield this.service.bookreview.get(this.ctx.request.body);
    }
    * gettapid() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.bookreview.gettapid(this.ctx.request.body);
    }
    * updatetapnumber() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.bookreview.update(this.ctx.request.body);
    }
    * updatelikenumber() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.bookreview.updatelikenumber(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.bookreview.selectid(this.ctx.request.body);
    }
    * leadselect() {
      this.ctx.body = yield this.service.bookreview.leadselect(this.ctx.request.body);
    }

  }
  return LeadController;
};
