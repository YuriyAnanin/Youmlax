import { CourseCard } from "../../../../shared/components/CourseCard";
import Lesson1Img from "../../../../media/images/lesson.jpg";
import MentorImg from "../../../../media/images/profile.jpg";
import NotFoundBg from "../../../../media/images/not-found.png";
import { CourseItem } from "../../../../types/CoursesTypes";

const ActiveCourses: CourseItem[] = [
	{
		image: Lesson1Img,
		name: "Дизайн моб. приложений",
		desc: "В этом курсе вы научитесь создавать базовые экраны мобильных приложений",
		link: "/courses/course-1",
		activityDays: "22 дня активности",
		courseProgress: { finishedExercisesCount: 8, allExercisesCount: 16 },
		courseLegend: {
			viewsCount: 1,
			commentsCount: 2,
			filesCount: 3,
		},
		mentorData: { name: "Чуваааак", link: "/", image: MentorImg },
	},
	{
		image: Lesson1Img,
		name: "Основы типографики",
		desc: "В этом курсе вы научитесь создавать шрифты",
		link: "/courses/course-2",
		activityDays: "5 дней активности",
		courseProgress: { finishedExercisesCount: 5, allExercisesCount: 6 },
		courseLegend: {
			viewsCount: 1,
			commentsCount: 2,
			filesCount: 3,
		},
		mentorData: { name: "Чуваааак", link: "/", image: MentorImg },
	},
	{
		image: Lesson1Img,
		name: "Как составлять ТЗ",
		desc: "В этом курсе вы научитесь составлять ТЗ",
		link: "/courses/course-3",
		passivityDays: "3 дня без активности",
		courseProgress: { finishedExercisesCount: 2, allExercisesCount: 26 },
		courseLegend: {
			viewsCount: 2,
			commentsCount: 3,
			filesCount: 4,
		},
		mentorData: { name: "Чуваааак", link: "/", image: MentorImg },
	},
];

export const MyCoursesGrid = () => {
	return (
		<div className="space-y-6 pb-16">
			<div className="bg-white rounded-lg p-4 w-full">
				{ActiveCourses.length > 0 ? (
					<div className="grid grid-cols-4 gap-6">
						{ActiveCourses.map((course) => (
							<CourseCard
								image={course.image}
								name={course.name}
								desc={course.desc}
								link={course.link}
								activityDays={course.activityDays || undefined}
								passivityDays={course.passivityDays || undefined}
								courseProgress={course.courseProgress}
								courseLegend={course.courseLegend}
								mentorData={course.mentorData}
							/>
						))}
					</div>
				) : (
					<div className="h-[300px] w-full flex items-center justify-center relative">
						<img
							src={NotFoundBg}
							className="h-[342px] w-[342px] rounded text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
							alt="Курсы не найдены"
						/>
						<h2 className="text-3xl text-[#c1c1c1] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-full text-center">
							У вас нет активных курсов
						</h2>
					</div>
				)}
			</div>
		</div>
	);
};
