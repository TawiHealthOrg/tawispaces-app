<script>
  import { Link, Toolbar } from "framework7-svelte";
  import Tab from "./Tab.svelte";
</script>

<Toolbar tabbar icons position="bottom">
  <Link
    tabLink="#tab-1"
    tabLinkActive
    text="Home"
    iconIos="f7:house"
    iconMd="material:home"
  />
  <Link
    tabLink="#tab-2"
    text="Appointments"
    iconIos="f7:calendar_fill"
    iconMd="material:today"
  />
  <Link
    tabLink="#tab-3"
    text="Journals"
    iconIos="f7:book"
    iconMd="material:menu_book"
  />
  <Link
    tabLink="#tab-4"
    text="Community"
    iconIos="f7:quote_bubble_fill"
    iconMd="material:question_answer"
  />
</Toolbar>

<Tab />
