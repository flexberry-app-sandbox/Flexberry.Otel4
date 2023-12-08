import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOtel4ДолжностьLForm from './forms/i-i-s-otel4-должность-l';
import IISOtel4ДоступLForm from './forms/i-i-s-otel4-доступ-l';
import IISOtel4КомнатаLForm from './forms/i-i-s-otel4-комната-l';
import IISOtel4ОтельLForm from './forms/i-i-s-otel4-отель-l';
import IISOtel4СмартКлючLForm from './forms/i-i-s-otel4-смарт-ключ-l';
import IISOtel4СотрудникLForm from './forms/i-i-s-otel4-сотрудник-l';
import IISOtel4ДолжностьEForm from './forms/i-i-s-otel4-должность-e';
import IISOtel4ДоступEForm from './forms/i-i-s-otel4-доступ-e';
import IISOtel4КомнатаEForm from './forms/i-i-s-otel4-комната-e';
import IISOtel4ОтельEForm from './forms/i-i-s-otel4-отель-e';
import IISOtel4СмартКлючEForm from './forms/i-i-s-otel4-смарт-ключ-e';
import IISOtel4СотрудникEForm from './forms/i-i-s-otel4-сотрудник-e';
import IISOtel4ГостиModel from './models/i-i-s-otel4-гости';
import IISOtel4ДолжностьModel from './models/i-i-s-otel4-должность';
import IISOtel4ДоступModel from './models/i-i-s-otel4-доступ';
import IISOtel4КомнатаModel from './models/i-i-s-otel4-комната';
import IISOtel4ОтельModel from './models/i-i-s-otel4-отель';
import IISOtel4РегистрЗаписиModel from './models/i-i-s-otel4-регистр-записи';
import IISOtel4СмартКлючModel from './models/i-i-s-otel4-смарт-ключ';
import IISOtel4СотрудникModel from './models/i-i-s-otel4-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otel4-гости': IISOtel4ГостиModel,
    'i-i-s-otel4-должность': IISOtel4ДолжностьModel,
    'i-i-s-otel4-доступ': IISOtel4ДоступModel,
    'i-i-s-otel4-комната': IISOtel4КомнатаModel,
    'i-i-s-otel4-отель': IISOtel4ОтельModel,
    'i-i-s-otel4-регистр-записи': IISOtel4РегистрЗаписиModel,
    'i-i-s-otel4-смарт-ключ': IISOtel4СмартКлючModel,
    'i-i-s-otel4-сотрудник': IISOtel4СотрудникModel
  },

  'application-name': 'Otel4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Otel4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otel4',
          title: 'Otel4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        регистрация: {
          caption: 'Регистрация',
          title: 'Регистрация',
          'i-i-s-otel4-доступ-l': {
            caption: 'Регистрация',
            title: ''
          }
        },
        'смарт-ключ': {
          caption: 'Смарт ключ',
          title: 'Смарт ключ',
          'i-i-s-otel4-смарт-ключ-l': {
            caption: 'СмартКлюч',
            title: 'Смарт ключ'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-otel4-должность-l': {
            caption: 'Должность',
            title: 'Должность'
          },
          'i-i-s-otel4-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          }
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-otel4-отель-l': {
            caption: 'Отель',
            title: 'Отель'
          },
          'i-i-s-otel4-комната-l': {
            caption: 'Комната',
            title: 'Комната'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-otel4-должность-l': IISOtel4ДолжностьLForm,
    'i-i-s-otel4-доступ-l': IISOtel4ДоступLForm,
    'i-i-s-otel4-комната-l': IISOtel4КомнатаLForm,
    'i-i-s-otel4-отель-l': IISOtel4ОтельLForm,
    'i-i-s-otel4-смарт-ключ-l': IISOtel4СмартКлючLForm,
    'i-i-s-otel4-сотрудник-l': IISOtel4СотрудникLForm,
    'i-i-s-otel4-должность-e': IISOtel4ДолжностьEForm,
    'i-i-s-otel4-доступ-e': IISOtel4ДоступEForm,
    'i-i-s-otel4-комната-e': IISOtel4КомнатаEForm,
    'i-i-s-otel4-отель-e': IISOtel4ОтельEForm,
    'i-i-s-otel4-смарт-ключ-e': IISOtel4СмартКлючEForm,
    'i-i-s-otel4-сотрудник-e': IISOtel4СотрудникEForm
  },

});

export default translations;
