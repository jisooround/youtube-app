export function displayedAt(now:any, createdAt: any) {
  const milliSeconds = now - createdAt;
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `recently`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}minutes`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}hours`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}days`; 
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}weeks`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}months`;
  const years = days / 365;
  return `${Math.floor(years)}years`;
}