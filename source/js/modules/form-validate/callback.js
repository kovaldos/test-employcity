/* eslint-disable no-console */
import {modals} from '../modals/init-modals';

const baseSuccessCallback = (event) => {
  event.preventDefault();

  const orderMainForm = event.target.closest('form');
  const sizeRangeValue = orderMainForm.querySelector('.size-range__percent').textContent;
  const orderMainFormData = new FormData(orderMainForm);
  orderMainFormData.append('range', sizeRangeValue);
  const formDataObj = Object.fromEntries(orderMainFormData.entries());
  // console.dir(JSON.stringify(formDataObj, true, 5));
  console.dir(formDataObj);

  // В данном коллбеке разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер

  // if response OK вставить в ответ с сервера, убрать таймаут при необходимости
  setTimeout(() => {
    modals.open('order-main-success');
  }, 500);

};

const baseErrorCallback = (event) => {
  event.preventDefault();

  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер

  console.error('Проверьте заполненность формы');

};

export const callbacks = {
  base: {
    // Сброс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
