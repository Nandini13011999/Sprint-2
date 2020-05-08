export class Question{
    questionId : number

	choice:Number
	questionTitle : String
	questionAnswer : Number
	questionMarks : Number
	questionOptions:Answer[];
	chosenAnswer : Number 
	marksScored : Number
	test:Assessment

}
export class Answer{
	answerId:Number;
	values:String;
}
export class Assessment
{
	testId:Number;
	
}