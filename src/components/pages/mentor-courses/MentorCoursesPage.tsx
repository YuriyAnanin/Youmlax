import { InsideSidebar } from "../../../shared/components/inside-sidebar";
import { MentorCoursesGrid } from "./components/courses-grid";
import { MentorCoursesHeader } from "./components/header";

const SidebarLinks = [
	{
		text: "Все",
		link: "/all",
		isActive: true,
	},
	{
		text: "Продажи",
		link: "/purchases",
	},
	{
		text: "Маркетинг",
		link: "/marketing",
	},
	{
		text: "СММ",
		link: "/smm",
	},
	{
		text: "Управление",
		link: "/management",
	},
];

const handleAddCategory = () => {
	alert("Hello world!");
};

export const MentorCoursesPage = () => {
	return (
		<section className="mt-8">
			<MentorCoursesHeader />
			<div className="flex space-x-7 mt-5 w-full">
				<InsideSidebar
					labels={SidebarLinks}
					title="Категории"
					handleAddLabel={handleAddCategory}
				/>
				<MentorCoursesGrid />
			</div>
		</section>
	);
};
