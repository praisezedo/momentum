export type Goal = {
    id: number,
    title: string,
    completed: boolean,
    version?: number
}

export type CreateGoalInput = {
    title: string;
}

export type UpdateGoalInput = {
    title?: string;
    completed?: boolean;
    version: number;
}
