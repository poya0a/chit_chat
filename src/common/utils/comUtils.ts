const onScrollLock = () => {
  document.body.style.cssText = `
  position: fixed; 
  top: -${window.scrollY}px;
  overflow-y: scroll;
  width: 100%;`;
};

const onScrollUnlock = () => {
  const scrollY = document.body.style.top;
  document.body.style.cssText = "";
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};

const convertUnixTimeToFormattedDate = (unixtime: number) => {
  const date = new Date(unixtime);
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes = date.getMinutes();
  const period = date.getHours() >= 12 ? "오후" : "오전";

  return `${period} ${hours.toString().padStart(2, "0")}시 ${minutes
    .toString()
    .padStart(2, "0")}분`;
};

export { onScrollLock, onScrollUnlock, convertUnixTimeToFormattedDate };
