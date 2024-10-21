import { CourseCard } from "../../../../shared/components/CourseCard";
import Lesson1Img from "../../../../media/images/lesson.jpg";
import MentorImg from "../../../../media/images/profile.jpg";

export const MentorCoursesGrid = () => {
	return (
		<div className="bg-white rounded-lg p-4 w-full">
			<h2 className="text-xl text-dark font-bold">Активные</h2>
			<div className="mt-3 grid grid-cols-4 gap-6">
				<CourseCard
					image={Lesson1Img}
					name="Дизайн моб. приложений"
					desc="В этом курсе вы научитесь создавать базовые экраны мобильных приложений"
					link="/courses/course-1"
					activityDays="22 дня активности"
					courseProgress={{ finishedExercisesCount: 8, allExercisesCount: 16 }}
					courseLegend={{ commentsCount: 1, viewsCount: 2, filesCount: 3 }}
					mentorData={{ name: "Чуваааак", link: "/", image: MentorImg }}
				/>
				<CourseCard
					image={Lesson1Img}
					name="Основы типографики"
					desc="В этом курсе вы научитесь создавать шрифты"
					link="/courses/course-2"
					activityDays="5 дней активности"
					courseProgress={{ finishedExercisesCount: 5, allExercisesCount: 6 }}
					courseLegend={{ commentsCount: 1, viewsCount: 2, filesCount: 3 }}
					mentorData={{ name: "Чуваааак", link: "/", image: MentorImg }}
				/>
				<CourseCard
					image={Lesson1Img}
					name="Как составлять ТЗ"
					desc="В этом курсе вы научитесь составлять ТЗ"
					link="/courses/course-3"
					passivityDays="3 дня без активности"
					courseProgress={{ finishedExercisesCount: 2, allExercisesCount: 26 }}
					courseLegend={{ commentsCount: 1, viewsCount: 2, filesCount: 3 }}
					mentorData={{ name: "Чуваааак", link: "/", image: MentorImg }}
				/>
				<CourseCard
					image={Lesson1Img}
					name="Как составлять ТЗ"
					desc="В этом курсе вы научитесь составлять ТЗ"
					link="/courses/course-4"
					passivityDays="3 дня без активности"
					courseProgress={{ finishedExercisesCount: 2, allExercisesCount: 26 }}
					courseLegend={{ commentsCount: 1, viewsCount: 2, filesCount: 3 }}
					mentorData={{ name: "Чуваааак", link: "/", image: MentorImg }}
				/>
			</div>
		</div>
	);
};
