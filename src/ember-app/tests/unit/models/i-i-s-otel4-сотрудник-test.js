import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel4-сотрудник', 'Unit | Model | i-i-s-otel4-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-otel4-гости',
    'model:i-i-s-otel4-должность',
    'model:i-i-s-otel4-доступ',
    'model:i-i-s-otel4-комната',
    'model:i-i-s-otel4-отель',
    'model:i-i-s-otel4-регистр-записи',
    'model:i-i-s-otel4-смарт-ключ',
    'model:i-i-s-otel4-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
