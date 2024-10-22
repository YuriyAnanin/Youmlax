import { EmployeeCourseProgress } from "./EmployeesTypes";
import { MentorCourseData } from "./MentorsType";

export type CourseLegend = {
	commentsCount?: number;
	viewsCount?: number;
	filesCount?: number;
};

export type CourseItem = {
	image: string;
	name: string;
	desc: string;
	link: string;
	activityDays?: string;
	passivityDays?: string;
	courseProgress: EmployeeCourseProgress;
	courseLegend: CourseLegend;
	mentorData: MentorCourseData;
};
