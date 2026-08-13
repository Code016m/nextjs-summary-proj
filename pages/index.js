import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Marienplatz_Munich.jpn.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/M%C3%BCnchner_Kammerspiele.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return { props: { meetups: DUMMY_MEETUPS } };
}

export default HomePage;
