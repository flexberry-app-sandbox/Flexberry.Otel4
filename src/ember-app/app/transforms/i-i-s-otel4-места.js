import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import МестаEnum from '../enums/i-i-s-otel4-места';

export default FlexberryEnum.extend({
  enum: МестаEnum,
  sourceType: 'IIS.Otel4.Места'
});
