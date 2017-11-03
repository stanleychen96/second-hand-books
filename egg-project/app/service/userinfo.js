'use strict';

module.exports = app => {
  class Userinfo extends app.Service {
    // * create(param) {
    //   try {
    //     yield app.mysql.insert('userinfo', param);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }

    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('userinfo', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    // * select() {
    //   let text;
    //   try {
    //   /* 
    //     text = yield app.mysql.select('userinfo', { 
    //       where: {
    //         name: [ 'Amy', '' ],
    //       },
    //     });
    //   */
    //     text = yield app.mysql.select('userinfo');
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return text;
    // }

    // * delete(a) {
    //   try {
    //     yield app.mysql.delete('userinfo', a);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }

    // * update(s) {
    //   try {
    //     yield app.mysql.update('userinfo', s);
    //   } catch (q) {
    //     this.ctx.logger.error(q);
    //     return false;
    //   }
    //   return true;
    // }

  }
  return Userinfo;
};

