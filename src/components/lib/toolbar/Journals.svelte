<script>
  import {
    BlockTitle,
    Card,
    CardHeader,
    CardContent,
    Link,
    CardFooter,
  } from "framework7-svelte";
  import Parser from "rss-parser/dist/rss-parser.js";
  const CORS_PROXY = "https://cors-proxy.fringe.zone/";
  const feedURL =
    "https://www.sciencedaily.com/rss/health_medicine/medical_devices.xml";
  const parser = new Parser();

  let rssFeeds;

  $: parser
    .parseURL(CORS_PROXY + feedURL)
    .then((feeds) => {
      rssFeeds = feeds.items;
    })
    .catch((err) => {
      console.log("err %s", err);
    });
</script>

{#if rssFeeds}
  {#each rssFeeds as feed, i}
    <Card outlineMd class="demo-card-header-pic">
      <CardHeader
        valign="bottom"
        style="background-image: url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)"
        >{feed.title}</CardHeader
      >
      <CardContent>
        <p class="date">{feed.pubDate}</p>
        <p>
          {feed.contentSnippet}
        </p>
      </CardContent>
      <CardFooter>
        <Link>Bookmark</Link>
        <Link href={feed.link} back="true">Read more</Link>
      </CardFooter>
    </Card>
  {/each}
{:else}
  <BlockTitle>Fetching Latest Health Journals</BlockTitle>
  <Card
    outline
    class="skeleton-text skeleton-effect-wave"
    title="Card Header"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
    footer="Card Footer"
  />
{/if}
