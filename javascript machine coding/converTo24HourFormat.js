function convertTo24HrsFormat(time) {
  // write your solution here
  // Split time into time part and AM/PM part
  const parts = time.slice(-2); // Get last 2 characters (AM or PM)
  const timeOnly = time.slice(0, -2); // Get time without AM/PM

  // Split the time into hours and minutes
  const [hourStr, minuteStr] = timeOnly.split(":");
  let hours = parseInt(hourStr);
  const minutes = minuteStr;

  // Convert hours based on AM/PM
  if (parts === "AM") {
    if (hours === 12) {
      hours = 0; // 12AM is 00 in 24hr format
    }
  } else if (parts === "PM") {
    if (hours !== 12) {
      hours += 12; // Add 12 to PM hours except 12PM
    }
  }

  // Return the formatted time with padded zeros if needed
  const finalHours = String(hours).padStart(2, "0");
  return `${finalHours}:${minutes}`;
}

console.log(`Converted time: ${convertTo24HrsFormat("1:45PM")}`); // Output should be '13:45'
console.log(`Converted time: ${convertTo24HrsFormat("03:45PM")}`); // Output should be '15:45'
