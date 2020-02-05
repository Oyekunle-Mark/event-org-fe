import axios, { AxiosResponse } from 'axios';

export interface Event {
    creator: string;
    title: string;
    description: Date;
    venue: string;
    isFree: boolean;
    daysActive: Date[];
}

const URL = "https://events-man.herokuapp.com/";

export class EventService {
    public async getEvents(): Promise<AxiosResponse<any>> {
        const response = await axios.get(URL);

        return response;
    }

    public async createEvents(event: Event): Promise<AxiosResponse<any>> {
        const response = await axios.post(URL, event)

        return response;
    }
}
