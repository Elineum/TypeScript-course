import { IClient } from "../Clients/clients.interface";
import { IVisitorsDatabase } from "./visitors.interface";

export class VisitorsDatabase implements IVisitorsDatabase {
  #visitors: IClient[] = [];

  constructor() {
    this.#startMonitoringTime();
  }

  get visitors() {
    return this.#visitors;
  }

  set visitors(newVisitors: IClient[]) {
    this.#visitors = newVisitors;
  }

  #isClosingSoon(): boolean {
    const CLOSE_TIME = 19;
    const MINS_WHEN_START_ALERTING = 45;

    const currDate = new Date();
    const currHours = currDate.getHours();
    const currMins = currDate.getMinutes();

    return (
      CLOSE_TIME > currHours &&
      currHours === CLOSE_TIME - 1 &&
      currMins >= MINS_WHEN_START_ALERTING
    );
  }

  #startMonitoringTime() {
    const checker = setInterval(
      () => this.#isClosingSoon() && this.#alertVisitors(),
      60000
    );

    //@ts-ignore
    checker.unref();
  }

  #alertVisitors(): void {
    const CLOSE_TIME_HR = 19;
    //Alert visitors with sms, or similar notification systems if needed

    //This like a loudspeaker below
    console.log(
      `Dear visitors, the zoo closes at ${CLOSE_TIME_HR}:00, please leave everyone! Thank you for being with us today! And we look forward to seeing you on other days, during business hours!`
    );
  }
}
