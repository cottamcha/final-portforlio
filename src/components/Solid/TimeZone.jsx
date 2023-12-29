import { onCleanup, onMount, createSignal, Show } from 'solid-js';

function TimeZone() {
  const [currentTime, setCurrentTime] = createSignal(new Date());

  function formatTimeForUK(date) {
    // Format the date for the UK locale.
    return date.toLocaleTimeString('en-GB');
  }

  function updateClock() {
    setCurrentTime(new Date());
  }

  onMount(() => {
    const interval = setInterval(updateClock, 1000);
    onCleanup(() => clearInterval(interval));
  });

  return (

      <Show when={currentTime()}>
        <time
          datetime={currentTime().toISOString()}
          class="text-2xl xl:text-5xl w-50 xl:w-100 h-[calc(100%-28px)] font-serif flex justify-center items-center"
        >
          {formatTimeForUK(currentTime())}
        </time>
      </Show>
  );
}

export default TimeZone;
