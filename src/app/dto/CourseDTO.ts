export default class CourseDTO {
  private _id: string;
  private _lecturerId: string;
  private _referenceBook: string;

  constructor(id: string, lecturerId: string, referenceBook: string) {
    this._id = id;
    this._lecturerId = lecturerId;
    this._referenceBook = referenceBook;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get lecturerId(): string {
    return this._lecturerId;
  }

  set lecturerId(value: string) {
    this._lecturerId = value;
  }

  get referenceBook(): string {
    return this._referenceBook;
  }

  set referenceBook(value: string) {
    this._referenceBook = value;
  }
}
