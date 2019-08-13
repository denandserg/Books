import _get from 'lodash.get';
import { useCallback, useEffect, useState } from 'react';

export default function useInnerVal<V, C extends Function>({
  value,
  onChange
}: {
  value: V;
  onChange: C;
}) {
  const [innerVal, setInnerVal] = useState<V>(value);

  useEffect(() => setInnerVal(value), [value]);

  const handleChange = useCallback(
    evt => {
      setInnerVal(_get(evt, ['target', 'value'], evt));
      onChange(evt);
    },
    [onChange]
  );

  return {
    innerVal,
    handleChange
  };
}
