/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {

    events.sort((a, b) => { 
        const dateA = new Date(a.startDatetime).getTime();
        const dateB = new Date(b.startDatetime).getTime();
        
        if (dateA !== dateB) {
            return dateA - dateB;
        } else {
            const durationA = new Date(a.endDatetime).getTime() - dateA;
            const durationB = new Date(b.endDatetime).getTime() - dateB;
            return durationA - durationB;
        }
    });

    return events;
}

// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}