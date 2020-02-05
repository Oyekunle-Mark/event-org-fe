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
    public async getEvents(): Promise<AxiosResponse<Event[]>> {
        const response = await axios.get(URL);

        return response;
    }

    public async createEvents(event: Event): Promise<AxiosResponse<Event>> {
        const response = await axios.post(URL, event)

        return response;
    }

    public async updateEvents(event: Event, id: number): Promise<AxiosResponse<Event>> {
        const response = await axios.put(`URL/${id}`, event)

        return response;
    }

    public async removeEvents(id: number): Promise<AxiosResponse<Event>> {
        const response = await axios.delete(`URL/${id}`)

        return response;
    }
}
