export interface MenuDTO {
  name: string;
  url?: string;
  children?: MenuDTO[];
}
