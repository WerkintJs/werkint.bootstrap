'use strict';

import module from 'module';

var lang = module.config().lang;

export default {
  load: function (name, req, onLoad) {
    requirejs(['css!inspinia/style'], function (ret) {
      requirejs(['css!inspinia/animate'], function (ret) {
        requirejs(['bootstrap'], function (ret) {
          onLoad(ret);
        });
      });
    });
  },
};
