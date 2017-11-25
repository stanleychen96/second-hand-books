'use strict';

module.exports = app => {
  class Bookreview extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('bookreview', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * gettapid(r) {
      let res;
      try {
        res = yield app.mysql.get('bookreview', r);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * selectnickname(res) {
      let text;
      try {
        text = yield app.mysql.select('bookreview', {
          where: { nickname: res.nickname },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return text;
    }

    * selectid() {
      let text;
      try {
        text = yield app.mysql.select('bookreview');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return text;
    }
    * leadselect() {
      let text;
      try {
        text = yield app.mysql.select('bookreview');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return text;
    }
    // * delete(a) {
    //   try {
    //     yield app.mysql.delete('bookreview', a);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }

    * update(s) {
      try {
        yield app.mysql.update('bookreview', s);
      } catch (q) {
        this.ctx.logger.error(q);
        return false;
      }
      return true;
    }
    * updatelikenumber(s) {
      try {
        yield app.mysql.update('bookreview', s);
      } catch (q) {
        this.ctx.logger.error(q);
        return false;
      }
      return true;
    }
  }
  return Bookreview;
};

