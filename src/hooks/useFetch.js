import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));

    setLoading(false);
  }, [url]);

  return {
    data,
    loading,
  };
};

export default useFetch;
