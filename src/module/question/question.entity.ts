export class Question {
  constructor(
    public questionText: string,
    public questionContent: string,
    public category: string
  ) {}

  static create(
    questionText: string,
    questionContent: string,
    category: string
  ): Question {
    return new Question(questionText, questionContent, category);
  }
}
