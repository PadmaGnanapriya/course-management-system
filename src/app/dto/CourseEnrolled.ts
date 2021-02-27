export default class CourseEnrolled {
  private _id: string;
  private _courseId: string;
  private _studentId: string;

  constructor(id: string, courseId: string, studentId: string) {
    this._id = id;
    this._courseId = courseId;
    this._studentId = studentId;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get courseId(): string {
    return this._courseId;
  }

  set courseId(value: string) {
    this._courseId = value;
  }

  get studentId(): string {
    return this._studentId;
  }

  set studentId(value: string) {
    this._studentId = value;
  }
}
