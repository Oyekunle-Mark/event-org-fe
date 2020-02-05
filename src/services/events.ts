interface Event {
    creator: string;
    title: string;
    description: Date;
    venue: string;
    isFree: boolean;
    daysActive: Date[];
}

export class EventService {
    private events: Event[];

    constructor() { }
}