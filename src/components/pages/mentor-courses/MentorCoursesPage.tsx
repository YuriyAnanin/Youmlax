import { MentorCoursesGrid } from "./components/courses-grid";
import { MentorCoursesHeader } from "./components/header";
import { MentorCoursesSidebar } from "./components/sidebar";

export const MentorCoursesPage = () => {
	return (
		<section className="mt-8">
			<MentorCoursesHeader />
			<div className="flex space-x-7 mt-5 w-full">
				<MentorCoursesSidebar />
				<MentorCoursesGrid />
			</div>
		</section>
	);
};
