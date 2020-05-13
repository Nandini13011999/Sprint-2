export class Question {
	questionId: number

	choice: Number
	questionTitle: String

	questionMarks: Number

	questionOptions: Array<Answer> = [];
	chosenAnswer: Number
	marksScored: Number

}
export class Answer {
	id: Number;
	value: String;
}
