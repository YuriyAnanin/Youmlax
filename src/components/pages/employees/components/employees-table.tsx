import clsx from "clsx";
import UserImg from "../../../../media/images/profile.jpg";
import { EmployeesTableRow } from "./employees-table-row";

type Props = {
	tableClassName?: string;
};

const UsersData = [
	{
		userId: 123,
		userName: "Angela Vatiga",
		userEmail: "an@gmail.com",
		userPosition: "Дизайнер",
		userImg: UserImg,
		monthlyActivity: "1.4 ч",
		awaitingTasksCount: 4,
		finishedExercisesCount: 2,
		userCourses: [
			{
				courseName: "Дизайн моб. приложений",
				courseProgress: {
					finishedExercisesCount: 5,
					allExercisesCount: 16,
				},
			},
			{
				courseName: "Основы графики",
				courseProgress: {
					finishedExercisesCount: 5,
					allExercisesCount: 6,
				},
			},
			{
				courseName: "Как составлять тз",
				courseProgress: {
					finishedExercisesCount: 2,
					allExercisesCount: 26,
				},
			},
		],
	},

	{
		userId: 123,
		userName: "Angela Vatiga",
		userEmail: "an@gmail.com",
		userPosition: "Дизайнер",
		userImg: UserImg,
		monthlyActivity: "1.4 ч",
		awaitingTasksCount: 4,
		finishedExercisesCount: 2,
		userCourses: [
			{
				courseName: "Дизайн моб. приложений",
				courseProgress: {
					finishedExercisesCount: 5,
					allExercisesCount: 16,
				},
			},
			{
				courseName: "Основы графики",
				courseProgress: {
					finishedExercisesCount: 5,
					allExercisesCount: 6,
				},
			},
			{
				courseName: "Как составлять тз",
				courseProgress: {
					finishedExercisesCount: 2,
					allExercisesCount: 26,
				},
			},
		],
	},
];

export const EmployeesTable = ({ tableClassName }: Props) => {
	const tableHeaderGrid =
		"grid grid-cols-[208px_190px_180px_250px_250px] gap-x-4";

	return (
		<div className={clsx(tableClassName)}>
			<div className={clsx(tableHeaderGrid, "px-4 text-lg font-extrabold")}>
				<div>Имя</div>
				<div className="text-center">Должность</div>
				<div className="text-center">Почта</div>
				<div className="text-center">Текущее обучение</div>
				<div className="text-center">Прогресс</div>
			</div>
			{UsersData.map((User) => (
				<EmployeesTableRow
					userId={User.userId}
					userName={User.userName}
					userEmail={User.userEmail}
					userPosition={User.userPosition}
					userImg={User.userImg}
					monthlyActivity={User.monthlyActivity}
					awaitingTasksCount={User.awaitingTasksCount}
					finishedExercisesCount={User.finishedExercisesCount}
					userCourses={User.userCourses}
				/>
			))}
		</div>
	);
};
