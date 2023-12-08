import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel4-отель', 'Unit | Serializer | i-i-s-otel4-отель', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otel4-отель',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-otel4-классы',
    'transform:i-i-s-otel4-места',
    'transform:i-i-s-otel4-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
