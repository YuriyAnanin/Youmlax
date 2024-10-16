import clsx from "clsx";
import { EmployeesCoursesRow } from "./employees-courses-row";
import { EmployeeCourse } from "../../../../types/EmployeesTypes";

type Props = {
	userId: number;
	userName: string;
	userEmail: string;
	userPosition: string;
	userImg: string;
	monthlyActivity: string;
	awaitingTasksCount?: string | number;
	finishedExercisesCount?: string | number;
	userCourses?: EmployeeCourse[];
};

export const EmployeesTableRow = ({
	userId,
	userName,
	userEmail,
	userPosition,
	userImg,
	monthlyActivity,
	awaitingTasksCount,
	finishedExercisesCount,
	userCourses,
}: Props) => {
	const tableBodyGrid = "grid grid-cols-[224px_206px_196px_466px]";

	return (
		<div
			className={clsx(
				"mt-3 bg-white rounded-2xl px-4 py-5 border border-gray-border",
				tableBodyGrid
			)}
		>
			<div className="border-r border-gray-border">
				<div className="flex items-center pb-4 pr-7 border-b border-gray-border h-[67px]">
					<img
						src={userImg}
						className="w-[56px] h-[56px] rounded-full"
						alt="user"
					/>
					<div className="ml-3">
						<p className="text-lg font-extrabold">{userName}</p>
						<p className="mt-[5px] text-green font-medium">Id - {userId}</p>
					</div>
				</div>
				<div className="flex items-center pr-7 mt-[14px] pl-4">
					<p>Среднемесячная ежедневная активность</p>
					<p className="ml-3 font-medium text-2xl flex-shrink-0">
						{monthlyActivity}
					</p>
				</div>
			</div>
			<div className="border-r border-gray-border">
				<div className="px-7 border-b border-gray-border h-[67px]">
					<p className="text-lg font-extrabold text-center">{userPosition}</p>
				</div>
				<div className="flex items-center px-7 mt-[14px]">
					<p>Задания ожидающие проверки </p>
					<p className="ml-3 font-medium text-2xl flex-shrink-0">
						{awaitingTasksCount}
					</p>
				</div>
			</div>
			<div className="border-r border-gray-border">
				<div className="px-7 border-b border-gray-border h-[67px]">
					<p className="text-lg font-extrabold text-center">{userEmail}</p>
				</div>
				<div className="flex items-center px-7 mt-[14px]">
					<p>Количество завершенных курсов</p>
					<p className="ml-3 font-medium text-2xl flex-shrink-0">
						{finishedExercisesCount}
					</p>
				</div>
			</div>
			<div className="pl-6">
				{userCourses &&
					userCourses.map((userCourse) => (
						<EmployeesCoursesRow
							courseProgress={userCourse.courseProgress}
							courseTitle={userCourse.courseName}
						/>
					))}
			</div>
		</div>
	);
};
