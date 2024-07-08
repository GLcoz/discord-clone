// /app/(main)/(routes)/servers/[serverId]/page.tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ServerIdPage = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { serverId } = router.query;

  useEffect(() => {
    if (serverId) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/servers/${serverId}`);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      };

      fetchData();
    }
  }, [serverId]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* Render your data here */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default ServerIdPage;
