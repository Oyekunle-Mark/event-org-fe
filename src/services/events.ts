import axios from 'axios';

interface Event {
    creator: string;
    title: string;
    description: Date;
    venue: string;
    isFree: boolean;
    daysActive: Date[];
}

const URL = "https://events-man.herokuapp.com/";

export class EventService {
    public async getEvents(): Promise<Event[]> {
        const events = (await axios.get(URL));

        return events.data;
    }
}
