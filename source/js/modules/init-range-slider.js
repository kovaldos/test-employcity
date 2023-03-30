import nouislider from 'nouislider';
import wNumb from 'wnumb';

const initRangeSlider = () => {

  const rangeSlider = document.getElementById('size-range');

  if (rangeSlider) {
    nouislider.create(rangeSlider, {
      start: [85],
      range: {
        'min': [1],
        'max': [100],
      },
      format: wNumb({
        decimals: 0,
      }),
    });
    let rangeSliderValueElement = document.getElementById('size-range-percent');

    rangeSlider.noUiSlider.on('update', function (values, handle) {
      rangeSliderValueElement.innerHTML = values[handle];
    });
  }
};


export {initRangeSlider};
