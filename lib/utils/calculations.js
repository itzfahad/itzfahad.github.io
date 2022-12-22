export function getElapsedTime(date) {
  const currentTime = Date.now(); // current timestamp in milliseconds
  const elapsedTime = currentTime - date.getTime(); // elapsed time in milliseconds
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (elapsedTime < 60000) {
    // less than 1 minute
    return "just now";
  } else if (elapsedTime < 3600000) {
    // less than 1 hour
    const minutes = Math.floor(elapsedTime / 60000);
    return `${minutes} minutes ago`;
  } else if (elapsedTime < 86400000) {
    // less than 1 day
    const hours = Math.floor(elapsedTime / 3600000);
    return `${hours} hours ago`;
  } else if (elapsedTime < 86400000 * 30) {
    return formatter.format(-1 * Math.floor(elapsedTime / 86400000), "day");
  } else if (elapsedTime < 86400000 * 365) {
    return formatter.format(
      -1 * Math.floor(elapsedTime / (86400000 * 30)),
      "month"
    );
  } else {
    return formatter.format(
      -1 * Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 365),
      "year"
    );
  }
}

export function getDivCenter(div) {
  const width = div.offsetWidth;
  const height = div.offsetHeight;
  const top = div.offsetTop;
  const left = div.offsetLeft;
  const centerX = left + width / 2;
  const centerY = top + height / 2;
  return { x: centerX, y: centerY };
}

export function getAngle(point1, point2) {
  const angle =
    (Math.atan2(point2.y - point1.y, point2.x - point1.x) * 180) / Math.PI;
  return Math.floor(angle);
}

export function getDistanse(point1, point2) {
  const distance = Math.sqrt(
    Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
  );
  return Math.floor(distance);
}