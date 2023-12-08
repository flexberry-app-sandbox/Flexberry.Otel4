import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otel4-должность-l');
  this.route('i-i-s-otel4-должность-e',
  { path: 'i-i-s-otel4-должность-e/:id' });
  this.route('i-i-s-otel4-должность-e.new',
  { path: 'i-i-s-otel4-должность-e/new' });
  this.route('i-i-s-otel4-доступ-l');
  this.route('i-i-s-otel4-доступ-e',
  { path: 'i-i-s-otel4-доступ-e/:id' });
  this.route('i-i-s-otel4-доступ-e.new',
  { path: 'i-i-s-otel4-доступ-e/new' });
  this.route('i-i-s-otel4-комната-l');
  this.route('i-i-s-otel4-комната-e',
  { path: 'i-i-s-otel4-комната-e/:id' });
  this.route('i-i-s-otel4-комната-e.new',
  { path: 'i-i-s-otel4-комната-e/new' });
  this.route('i-i-s-otel4-отель-l');
  this.route('i-i-s-otel4-отель-e',
  { path: 'i-i-s-otel4-отель-e/:id' });
  this.route('i-i-s-otel4-отель-e.new',
  { path: 'i-i-s-otel4-отель-e/new' });
  this.route('i-i-s-otel4-смарт-ключ-l');
  this.route('i-i-s-otel4-смарт-ключ-e',
  { path: 'i-i-s-otel4-смарт-ключ-e/:id' });
  this.route('i-i-s-otel4-смарт-ключ-e.new',
  { path: 'i-i-s-otel4-смарт-ключ-e/new' });
  this.route('i-i-s-otel4-сотрудник-l');
  this.route('i-i-s-otel4-сотрудник-e',
  { path: 'i-i-s-otel4-сотрудник-e/:id' });
  this.route('i-i-s-otel4-сотрудник-e.new',
  { path: 'i-i-s-otel4-сотрудник-e/new' });
});

export default Router;
