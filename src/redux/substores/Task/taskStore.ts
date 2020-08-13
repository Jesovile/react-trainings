/*тип и интерфейс части стора Task*/
export interface TaskStore {
    endDate: Date | undefined;
    title: string;
    description: string;
}