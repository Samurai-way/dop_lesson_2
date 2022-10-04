import {ChangeEvent, useCallback, useRef, useState} from 'react';
import {SlowComponent} from 'examples/slowComponent/SlowComponent';



export const Example_4 = () => {
  // const [value, setValue] = useState('');

  // const ref = useRef(null)

  // const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value),[value]);

  return (
    <div>
      <div>Lags when change value</div>
        <input type="text" />
      <SlowComponent />
    </div>
  );
};
