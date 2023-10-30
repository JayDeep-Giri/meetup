import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

export function NewMeetupPage() {
  const Navigate = useNavigate();
  function addMeetupHandler(meetupData) {
      Navigate('/', {replace: true})
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
  