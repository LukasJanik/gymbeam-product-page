export type CheckIsSelected = (code: string, value: string) => boolean;
export type UpdateSelection = (code: string, value: string) => void;

export type Range = [number, number];
export type GetRangeValues = (code: string) => Range | null;
export type UpdateRangeValues = (code: string, range: Range) => void;
