import moment from 'moment';

export const getTimerFromUnixTime = (unixTime: number): string => {
  const duration = moment.duration(moment(unixTime * 1000).diff(moment()));

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();


  if (duration.asMilliseconds() <= 0) {
    return 'You can claim your earnings now!';
  }

  return `Time left: ${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;
};

export const convertSecondsToTime = (seconds: number) => {
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= (24 * 3600);
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);


  if( seconds <= 0){
    return 'You can claim your earnings now!';
  }
  return `Time left: \n ${days} days : ${hours} hours : ${minutes} minutes : seconds`
};