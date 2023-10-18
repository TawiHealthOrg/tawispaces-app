<script>
  import {
    Tabs,
    Tab,
    Block,
    BlockTitle,
    Card,
    CardHeader,
    CardContent,
    Link,
    CardFooter,
  } from "framework7-svelte";
  import Journals from "./Journals.svelte";
  import CommunityList from "./CommunityList.svelte";
  import Appointment from "./Appointment.svelte";
</script>

<Tabs>
  <Tab id="tab-1" class="page-content" tabActive>
    <BlockTitle />
    <Block>
      <BlockTitle>Today's Routine (reminders set)</BlockTitle>
      <div class="timeline timeline-sides">
        <div class="timeline-item">
          <div class="timeline-item-date">08 <small>00</small></div>
          <div class="timeline-item-divider" />
          <div class="timeline-item-content">
            <div class="timeline-item-inner">Take 2 pills of presscription B</div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-date">11 <small>30</small></div>
          <div class="timeline-item-divider" />
          <div class="timeline-item-content">
            <div class="timeline-item-inner">Take 1 pill of prescription E</div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-date">15 <small>15</small></div>
          <div class="timeline-item-divider" />
          <div class="timeline-item-content">
            <div class="timeline-item-inner">Take 5ml of prescription F</div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-date">18 <small>30</small></div>
          <div class="timeline-item-divider" />
          <div class="timeline-item-content">
            <div class="timeline-item-inner">Go to the gym</div>
          </div>
        </div>
      </div>
    </Block>
    <Block>
      <BlockTitle>Next Appointments</BlockTitle>
      <Card class="demo-card-header-pic">
        <CardHeader
          valign="bottom"
          style="background-image: url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg)"
          >Influenza</CardHeader
        >
        <CardContent>
          <p class="date">Scheduled for Novemeber 8, 2023</p>
          <p>
            Flu, also known as influenza, is a viral infection of the nose,
            sinuses, throat, and respiratory tract. It's seasonal, often
            occurring in winter, and can spread rapidly, called then flu
            epidemic....
          </p>
        </CardContent>
        <CardFooter>
          <Link>View More</Link>
          <Link>Reschedule</Link>
        </CardFooter>
      </Card>
    </Block>
  </Tab>
  <Tab id="tab-2" class="page-content">
    <BlockTitle>Upcoming Appointments</BlockTitle>
    <Appointment />

  </Tab>
  <Tab id="tab-3" class="page-content">
    <BlockTitle>Health Journals</BlockTitle>
    <Block>
      <Journals />
    </Block>
  </Tab>
  <Tab id="tab-4" class="page-content">
    <BlockTitle>Communities</BlockTitle>
    <Block>
        <CommunityList />
    </Block>
  </Tab>
</Tabs>
