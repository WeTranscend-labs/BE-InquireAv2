export class Question {
  constructor(
    public questionId: number,
    public questionText: string,
    public questionContent: string,
    public category: string,
    public createdAt: Date = new Date()
  ) {}

  static create(
    questionId: number,
    questionText: string,
    questionContent: string,
    category: string
  ): Question {
    return new Question(questionId, questionText, questionContent, category);
  }
}
