const createNativeOptionsMarkup = (items, activeIndex) => {
  return items.map((el, index) => {
    if (activeIndex.length) {
      const currentIndex = activeIndex.find((item) => item === index);
      // console.log('selected');
      if (currentIndex === index) {
        return `<option ${el.value ? `value=${el.value.replace(/\s/g, '&nbsp;', el.value)}` : ''} selected>${el.text ? `${el.text}` : ''}</option>`;
      } else {
        // console.log(123);
        return `<option ${el.value ? `value=${el.value.replace(/\s/g, '&nbsp;', el.value)}` : ''}>${el.text ? `${el.text}` : ''}</option>`;
      }
    } else {
      // console.log(456);
      return `<option ${el.value ? `value=${el.value.replace(/\s/g, '&nbsp;', el.value)}` : ''}>${el.text ? `${el.text}` : ''}</option>`;
    }
  }).join('\n');
};

export const createNativeSelectMarkup = ({id, items, multiple, name, required, activeIndex = []}) => {
  return `<select ${id ? `id='${id}'` : ''} ${name ? `name='${name}'` : ''} ${multiple ? 'multiple' : ''} ${
    required ? 'required' : ''
  } tabindex="-1" aria-hidden="true">
            <option value=""></option>
            ${createNativeOptionsMarkup(items, activeIndex)}
          </select>`;
};

