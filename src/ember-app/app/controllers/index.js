import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.регистрация.caption'),
          title: i18n.t('forms.application.sitemap.регистрация.title'),
          children: [{
            link: 'i-i-s-otel4-доступ-l',
            caption: i18n.t('forms.application.sitemap.регистрация.i-i-s-otel4-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.регистрация.i-i-s-otel4-доступ-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.смарт-ключ.caption'),
          title: i18n.t('forms.application.sitemap.смарт-ключ.title'),
          children: [{
            link: 'i-i-s-otel4-смарт-ключ-l',
            caption: i18n.t('forms.application.sitemap.смарт-ключ.i-i-s-otel4-смарт-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.смарт-ключ.i-i-s-otel4-смарт-ключ-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-otel4-должность-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-otel4-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-otel4-должность-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-otel4-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-otel4-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-otel4-сотрудник-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-otel4-отель-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel4-отель-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel4-отель-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-otel4-комната-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel4-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel4-комната-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})