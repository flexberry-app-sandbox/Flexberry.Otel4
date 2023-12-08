import {
  defineNamespace,
  defineProjections,
  Model as РегистрЗаписиMixin
} from '../mixins/regenerated/models/i-i-s-otel4-регистр-записи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрЗаписиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
