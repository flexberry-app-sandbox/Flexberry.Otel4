import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступ: DS.attr('boolean'),
  кодДоступа: DS.attr('number'),
  комната: DS.belongsTo('i-i-s-otel4-комната', { inverse: null, async: false }),
  смартКлюч: DS.belongsTo('i-i-s-otel4-смарт-ключ', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-otel4-сотрудник', { inverse: null, async: false }),
  регистрЗаписи: DS.hasMany('i-i-s-otel4-регистр-записи', { inverse: 'доступ', async: false }),
  гости: DS.hasMany('i-i-s-otel4-гости', { inverse: 'доступ', async: false })
});

export let ValidationRules = {
  доступ: {
    descriptionKey: 'models.i-i-s-otel4-доступ.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДоступа: {
    descriptionKey: 'models.i-i-s-otel4-доступ.validations.кодДоступа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-otel4-доступ.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  смартКлюч: {
    descriptionKey: 'models.i-i-s-otel4-доступ.validations.смартКлюч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-otel4-доступ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрЗаписи: {
    descriptionKey: 'models.i-i-s-otel4-доступ.validations.регистрЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  гости: {
    descriptionKey: 'models.i-i-s-otel4-доступ.validations.гости.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоступE', 'i-i-s-otel4-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    смартКлюч: belongsTo('i-i-s-otel4-смарт-ключ', 'Смарт ключ', {
      кодКлюча: attr('Код смарт ключа', { index: 3, hidden: true }),
      статус: attr('Статус смарт ключа', { index: 4 })
    }, { index: 2, displayMemberPath: 'кодКлюча' }),
    сотрудник: belongsTo('i-i-s-otel4-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    комната: belongsTo('i-i-s-otel4-комната', 'Комната', {
      кодКомнаты: attr('Код комнаты', { index: 8, hidden: true }),
      класс: attr('Класс комнаты', { index: 9 }),
      колвоМест: attr('Количество мест ', { index: 10 }),
      стоимость: attr('Стоимотсь комнаты в день', { index: 11 })
    }, { index: 7, displayMemberPath: 'кодКомнаты' }),
    регистрЗаписи: hasMany('i-i-s-otel4-регистр-записи', 'Регистр записи', {
      кодРегистра: attr('Код регистра', { index: 0 }),
      датаЗаселения: attr('Дата заселения', { index: 1 }),
      датаВыезда: attr('Дата выезда', { index: 2 })
    }),
    гости: hasMany('i-i-s-otel4-гости', 'Гости', {
      кодГостя: attr('Код гостя', { index: 0 }),
      фИО: attr('ФИО', { index: 1 }),
      комментарий: attr('Комментарий', { index: 2 })
    })
  });

  modelClass.defineProjection('ДоступL', 'i-i-s-otel4-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    смартКлюч: belongsTo('i-i-s-otel4-смарт-ключ', 'Статус смарт ключа', {
      статус: attr('Статус смарт ключа', { index: 2 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-otel4-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    комната: belongsTo('i-i-s-otel4-комната', 'Код комнаты', {
      кодКомнаты: attr('Код комнаты', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
