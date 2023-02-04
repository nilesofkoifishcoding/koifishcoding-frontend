export enum SessionLocationType {
    Virtual,
    InPerson
}

export type Session = {
    id: number,
    date: string,
    time: string,
    locationType: SessionLocationType
}