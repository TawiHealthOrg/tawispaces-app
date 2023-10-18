<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>Tawi Spaces</NavTitle>
    <NavTitleLarge>Tawi Spaces</NavTitleLarge>
  </Navbar>
  <!-- Toolbar -->
  <Toolbar></Toolbar>
  <!-- Page content -->

  
    <Fab position="right-bottom" href="/vitals">
    <Icon ios="f7:waveform_path_ecg" md="material:monitor_heart" />
  </Fab>

</Page>
<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    Link,
    BlockTitle,
    Fab,
    Icon
  } from 'framework7-svelte';
  import Toolbar from '../components/lib/toolbar/Toolbar.svelte';
</script>