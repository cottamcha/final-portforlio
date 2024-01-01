import { onCleanup, onMount } from "solid-js";

export default function TimeZone() {
  let interval: ReturnType<typeof setInterval>;

  // Function to get the current time in the UK
  function getCurrentTimeInUK() {
    const now = new Date();
    // Adjust for GMT or BST
    const offsetUK = now.getTimezoneOffset() === 0 ? 0 : 1;
    now.setHours(now.getUTCHours() + offsetUK);
    return now;
  }

  // Function to format time for the UK
  function formatTimeForUK(date) {
    // Determine the current time offset for the UK
    const offsetUK = date.getTimezoneOffset() === 0 ? 0 : 1;
    const options = {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Europe/London",
    }

    const formattedTime = new Intl.DateTimeFormat("en-GB", options).format(date);
    const timeZoneAbbreviation = offsetUK === 0 ? "GMT" : "BST";
    return `${formattedTime} ${timeZoneAbbreviation}`;
  }

  function updateClock() {
    const timeDisplay = document.getElementById("timeDisplay");
    const now = getCurrentTimeInUK();

    if (timeDisplay) {
      timeDisplay.textContent = formatTimeForUK(now);
      timeDisplay.setAttribute("datetime", now.toISOString());
    }
  }

  onMount(() => {
    interval = setInterval(updateClock, 1000);
  });

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <time
      datetime=""
      id="timeDisplay"
      class="text-2xl xl:text-5xl w-50 xl:w-100 h-[calc(100%-28px)] font-serif flex justify-start items-center"
    >
      {formatTimeForUK(getCurrentTimeInUK())}
    </time>
  );
}
