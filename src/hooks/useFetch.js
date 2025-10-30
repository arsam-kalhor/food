import { useEffect, useState } from "react";

function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [option, setOption] = useState(null);

  // تابع برای ارسال داده (POST)
  const postData = (postData) => {
    setOption({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const fetchData = async (fetchOptions) => {
      try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) throw new Error("خطا در دریافت داده");
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };

    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && option) {
      fetchData(option);
    }
  }, [url, method, option]);

  return { data, error, postData };
}

export { useFetch };
export default useFetch;
