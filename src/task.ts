export interface Task {
    id: number;
    title: string;
    description: string;
    date: Date;
    isComplete: boolean;
    setTitle(title: string): void;
    setDescription(description: string): void;
    setDate(date: Date): void;
    setComplete(): void;
    getTitle(): string;
    getId(): number;
}
