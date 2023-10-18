<script>
  import {
    Tabs,
    Tab,
    Block,
    BlockTitle,
    List,
    ListGroup,
    ListItem,
    Card,
    CardHeader,
    CardContent,
    Link,
    CardFooter,
    ListIndex,
  } from "framework7-svelte";
  const randomNotifications = () => {
    return Math.floor(Math.random() * 100);
  };

  const groups = [
    {
      title: "A",
      communtites: ["Allcare Community group"],
    },
    {
      title: "K",
      communtites: ["KNH Community group"],
    },
    {
      title: "H",
      communtites: ["HealthDose community", "HealthCare Wellness Center"],
    },

    {
      title: "E",
      communtites: ["EliteGroup care"],
    },

    {
      title: "L",
      communtites: ["Lifeline group"],
    },
    {
      title: "T",
      communtites: ["Tawi Spaces Kenya", "Tawi Spaces Burundi", "Tawi Spaces Uganda", "Tawi Spaces Malawi"],
    },
  ];
  groups.sort((a, b) => {
    const tA = a.title.toUpperCase();
    const tB = b.title.toUpperCase();

    if (tA < tB) {
      return -1;
    }
    if (tA > tB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  const getImage = () => {
    return "https://source.boringavatars.com/beam"
  }

</script>

<ListIndex
  indexes="auto"
  listEl=".list.contacts-list"
  scrollList={true}
  label={true}
/>

<List contactsList ul={false} strongIos dividersIos>
{#each groups as group}
  <ListGroup>
    <ListItem title={group.title} groupTitle />
    {#each group.communtites as community}
      <ListItem
        title={community}
        link={`/community/${community}/123/445`}
        badge={randomNotifications()}
      >
      <img
      alt="community logo"
      slot="media"
      style="border-radius: 8px"
      src={getImage()}
      width="30"
    />
    </ListItem>
    {/each}
  </ListGroup>
{/each}
</List>
