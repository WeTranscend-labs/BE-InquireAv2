export class Answer {
  constructor(public answerText: string) {}

  static create(answerText: string): Answer {
    return new Answer(answerText);
  }
}
