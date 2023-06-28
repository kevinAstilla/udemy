import { useParams, UseParams } from 'react-router-dom';
const EventDetailPage = () => {
    const params = useParams();
    return(
        <main>
            <h1>eventDetail {params.eventId}</h1>
        </main>
    )
};

export default EventDetailPage;