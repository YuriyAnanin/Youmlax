import { MentorCoursesSidebarLink } from "./sidebar-links";

export const MentorCoursesSidebar = () => {
	return (
		<div className="bg-white rounded-lg p-4 w-full max-w-[200px] shrink-0">
			<h2 className="text-xl text-dark font-bold">Категории</h2>
			<div className="mt-6">
				<MentorCoursesSidebarLink link="#" text="Все" isActive />
				<MentorCoursesSidebarLink link="#" text="Продажи" />
				<MentorCoursesSidebarLink link="#" text="Маркетинг" />
				<MentorCoursesSidebarLink link="#" text="СММ" />
				<MentorCoursesSidebarLink link="#" text="Управление" />
			</div>
		</div>
	);
};
