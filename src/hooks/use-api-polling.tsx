import { formatTimeDifference } from '@/lib/date-time';
import { useEffect, useState } from 'react';

export const timeLapseInitialState = {
  lastFetchTime: null,
  lastFetchLapseTime: 'Just now',
};

export const useApiPolling = (props: any) => {
  const { isFetching, fulfilledTimeStamp, intervalTime } = props;

  const [timeLapse, setTimeLapse] = useState<any>(timeLapseInitialState);

  useEffect(() => {
    if (!isFetching) {
      const currentTime = new Date(fulfilledTimeStamp);
      const timeLapse = formatTimeDifference(currentTime);
      setTimeLapse({
        lastFetchLapseTime: timeLapse,
        lastFetchTime: fulfilledTimeStamp,
      });
    }
  }, [isFetching]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!!timeLapse?.lastFetchLapseTime && !!timeLapse?.lastFetchTime) {
        const newFetchTime = new Date(timeLapse?.lastFetchTime);
        const timeLapseInterval = formatTimeDifference(newFetchTime);
        setTimeLapse({
          lastFetchLapseTime: timeLapseInterval,
          lastFetchTime: timeLapse?.lastFetchTime,
        });
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [timeLapse?.lastFetchTime, timeLapse?.lastFetchLapseTime]);

  return { timeLapse };
};
