import { InsideSidebar } from "../../../shared/components/inside-sidebar";
import { MyCoursesGrid } from "./components/courses-grid";

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

export const MyCoursesPage = () => {
	return (
		<section className="mt-8">
			<div className="flex space-x-7 mt-5 w-full">
				<InsideSidebar labels={SidebarLinks} title="Категории" />
				<MyCoursesGrid />
			</div>
		</section>
	);
};
