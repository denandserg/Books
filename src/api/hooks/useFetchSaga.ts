import { useEffect, useState } from 'react';
import { Saga } from 'redux-saga';

import { runSaga } from '../../redux/configureStore';

export default function useFetchSaga<R>(fetchSaga: Saga, ...args: unknown[]) {
  const [data, setData] = useState<R>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = runSaga(fetchSaga, ...args);

    runFetch();

    return () => {
      fetchTask.cancel();
    };

    async function runFetch() {
      setLoading(true);

      const { ok, result } = await fetchTask.toPromise();

      if (fetchTask.isCancelled()) {
        return;
      }

      if (ok) {
        setData(result);
      } else {
        setData(undefined);
      }

      setLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading
  };
}
