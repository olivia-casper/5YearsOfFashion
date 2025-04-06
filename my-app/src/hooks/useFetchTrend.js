import { useState, useEffect } from "react";

function useFetchTrend(year) {
  const [trend, setTrend] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const response = await fetch(`https://fiveyearsoffashion-server.onrender.com/api/trends`);
        const data = await response.json();
        const trendYear = data.find(item => item.year === year);
        setTrend(trendYear);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchTrend();
  }, [year]);

  return { trend, loading, error };
}

export default useFetchTrend;
