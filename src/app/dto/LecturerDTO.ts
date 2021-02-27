export default class LecturerDTO {
  private _id: string;
  private _name: string;
  private _contact: string;
  private _nic: string;
  private _email: string;
  private _birthday: string;
  private _password: string;

  constructor(id: string, name: string, contact: string, nic: string, email: string, birthday: string, password: string) {
    this._id = id;
    this._name = name;
    this._contact = contact;
    this._nic = nic;
    this._email = email;
    this._birthday = birthday;
    this._password = password;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get contact(): string {
    return this._contact;
  }

  set contact(value: string) {
    this._contact = value;
  }

  get nic(): string {
    return this._nic;
  }

  set nic(value: string) {
    this._nic = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
