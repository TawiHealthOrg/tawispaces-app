<script>
  import {
    Navbar,
    Page,
    Block,
    List,
    ListItem,
    Card,
    Button,f7
  } from "framework7-svelte";
  import { getAllBodyParts, getSymptoms } from "../js/data"

  const getBodyPartsList = getAllBodyParts()

  const getSymptomsList = getSymptoms()

  const getBPrev = getAllBodyParts().reverse()

  let selectedBodyPart

  const selectedSymptoms = getSymptoms()

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const openConfirm = () =>
  {
    f7.dialog.confirm('Do you want to subit your vitals?', () => {
      f7.dialog.alert('Sumbitted!');
    });
  }

</script>

<Page>
  <Navbar title="Vitals" backLink="Back" />
  <Block strong >
    Tell us how you feel today
  </Block>

  <List strongIos outlineIos dividersIos>
    <ListItem title="Body Part" smartSelect>
        <select name="bodyParts" bind:value={selectedBodyPart}>
            {#each getBodyPartsList as bodyPartList}
            <option value={bodyPartList.ID}>{bodyPartList.Name}</option>
            {/each}
        </select>
    </ListItem>
    {#if selectedBodyPart}
    <ListItem title="Symptoms" smartSelect smartSelectParams={{ openIn: 'popup', searchbar: true, searchbarPlaceholder: 'Search Symptoms' }}>
        <select name="symptoms" multiple value={getSymptomsList} >
            {#each getSymptomsList as symptoms}
            <option value={symptoms.ID}>{symptoms.Name}</option>
            {/each}
        </select>
    </ListItem>   
    {/if}
  </List>
  {#if selectedBodyPart}
  <Block strongIos outlineIos>
    <p>
      <Button fill on:click={openConfirm} >Submit</Button>
    </p>
  </Block>
  {/if}
  <Block strong >
    Previous Vitals entries
  </Block>
  {#each getBPrev as bp, i  }
  {#if (selectedSymptoms)}
  <Card
  raised
  title={bp.Name}
  footer={new Date(year, month, day - i)}
/>
  {/if}
  {/each}
</Page>
