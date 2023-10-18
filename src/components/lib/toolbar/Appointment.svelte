<script>
  import {
    f7,
    List,
    ListItem,
    Block,
  } from "framework7-svelte";
  import { onMount, onDestroy } from "svelte";

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const today = new Date(year, month, day);
  const events = [
    {
      date: new Date(year, month, day),
      hours: 12,
      minutes: 30,
      title: "Acute inflammation of lung",
      color: "#2196f3",
    },
    {
      date: new Date(year, month, day),
      hours: 18,
      minutes: 0,
      title: "Virunga Community Get Together",
      color: "#4caf50",
    },
    {
      date: new Date(year, month, day + 4),
      hours: 21,
      minutes: 0,
      title: "Tawi Burundi Gym Session",
      color: "#e91e63",
    },
    {
      date: new Date(year, month, day + 10),
      hours: 16,
      minutes: 0,
      title: "Abdominal pain",
      color: "#2196f3",
    },
    {
      date: new Date(year, month, day + 7),
      hours: 21,
      minutes: 0,
      title: "Tawi Burundi Gym Session",
      color: "#ff9800",
    },
  ];
  let eventItems = [];

  let calendar;

  function renderEvents(calendar) {
    const currentDate = calendar.value[0];
    const currentEvents = events.filter(
      (event) =>
        event.date.getTime() >= currentDate.getTime() &&
        event.date.getTime() < currentDate.getTime() + 24 * 60 * 60 * 1000
    );

    const newEventItems = [];
    if (currentEvents.length) {
      currentEvents.forEach((event) => {
        const hours = event.hours;
        let minutes = event.minutes;
        if (minutes < 10) minutes = `0${minutes}`;
        newEventItems.push({
          title: event.title,
          time: `${hours}:${minutes}`,
          color: event.color,
        });
      });
    }
    eventItems = newEventItems;
  }

  onMount(() => {
    const $ = f7.$;
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    calendar = f7.calendar.create({
      containerEl: "#calendar",
      toolbar: false,
      value: [today],
      events,
      on: {
        init(calendar) {
          $(".navbar-calendar-title").text(
            `${monthNames[calendar.currentMonth]}, ${calendar.currentYear}`
          );
          calendar.$el.addClass("no-safe-area-right");
          renderEvents(calendar);
        },
        monthYearChangeStart(calendar) {
          $(".navbar-calendar-title").text(
            `${monthNames[calendar.currentMonth]}, ${calendar.currentYear}`
          );
        },
        change(calendar) {
          renderEvents(calendar);
        },
      },
    });
  });

  onDestroy(() => {
    calendar.destroy();
  });
</script>

<Block id="calendar" strong class="no-padding no-margin" />
<List id="calendar-events" noHairlines class="no-margin no-safe-area-left">
  {#each eventItems as item, index (index)}
    <ListItem title={item.title} after={item.time}>
      <div class="event-color" style={`background-color: ${item.color}`} slot="root-start" />
    </ListItem>
  {/each}
  {#if eventItems.length === 0}
    <ListItem><span class="text-color-gray" slot="title">No events for this day</span></ListItem>
  {/if}
</List>