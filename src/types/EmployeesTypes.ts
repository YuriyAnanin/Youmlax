export type EmployeeCourseProgress = {
	finishedExercisesCount: number;
	allExercisesCount: number;
};

export type EmployeeCourse = {
	courseName: string;
	courseProgress: EmployeeCourseProgress;
};
