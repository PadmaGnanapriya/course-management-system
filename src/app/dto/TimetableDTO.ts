export default class TimetableDTO {
  private _id: string;
  private _date: string;
  private _time: string;

  constructor(id: string, date: string, time: string) {
    this._id = id;
    this._date = date;
    this._time = time;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }
}
