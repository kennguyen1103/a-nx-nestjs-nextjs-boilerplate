export default class CustomError extends Error {
  private status: number;

  constructor(message, status) {
    super(`Error: ${message}`);
    this.status = status;
  }
}
