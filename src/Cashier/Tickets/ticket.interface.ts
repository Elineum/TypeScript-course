export type TTicketType = "adult" | "children" | "family";
export type TTicketPrice = 15 | 10 | 20;

export interface ITicket {
  type: TTicketType;
  price: TTicketPrice;
  clientFullname: string;
}
