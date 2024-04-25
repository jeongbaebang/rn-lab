/* eslint-disable @typescript-eslint/no-unused-vars */

// Error를 상속받아 커스텀 에러 클래스를 만들게 되면 obj instanceof Error를 사용해서 에러 객체를 식별할 수 있다는 장점이 생깁니다.
class CustomError extends Error {
  constructor(message: string) {
    super(message);

    this.name = this.constructor.name;
  }
}

class ValidationError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

class PropertyRequiredError extends ValidationError {
  public property: string;

  constructor(property: string) {
    super(`No property: ${property}`);

    this.property = property;
  }
}

class HttpError extends Error {
  public statusCode: number;

  constructor(statusCode: number) {
    super(`${statusCode}`);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}
