import clsx from "clsx";
import { CourseLegend } from "../../types/CoursesTypes";
import { EmployeeCourseProgress } from "../../types/EmployeesTypes";
import { MentorCourseData } from "../../types/MentorsType";
import { ReactComponent as Time } from "../../media/icons/time.svg";
import { ReactComponent as Views } from "../../media/icons/views.svg";
import { ReactComponent as Comments } from "../../media/icons/comments.svg";
import { ReactComponent as Files } from "../../media/icons/files.svg";
import { ProgressBar } from "./ProgressBar";
import { useNavigate } from "react-router-dom";

type Props = {
	image: string;
	name: string;
	desc: string;
	link: string;
	activityDays?: string;
	passivityDays?: string;
	courseProgress?: EmployeeCourseProgress;
	courseLegend?: CourseLegend;
	mentorData: MentorCourseData;
};

export const CourseCard = (props: Props) => {
	const navigate = useNavigate();

	const {
		image,
		name,
		desc,
		activityDays,
		passivityDays,
		courseProgress,
		courseLegend,
		mentorData,
		link,
	} = props;

	return (
		<div
			className="border border-gray-border rounded-lg p-4 space-y-4 flex flex-col h-full cursor-pointer hover:shadow-md transition duration-200"
			onClick={() => navigate(link)}
		>
			<img src={image} className="h-[127px] rounded w-full" alt={name} />
			<div>
				{(activityDays || passivityDays) && (
					<div
						className={clsx(
							"h-6 px-2 inline-flex items-center justify-center text-white text-xs rounded mb-2",
							activityDays && "bg-light-green",
							passivityDays && "bg-pink"
						)}
					>
						<Time className="w-4 h-4 mr-2" />
						{activityDays || passivityDays}
					</div>
				)}
				<h2 className="text-base text-dark font-bold">{name}</h2>
			</div>
			<p className="text-xs text-text pb-4">{desc}</p>
			<div className="space-y-4 !mt-auto">
				{courseProgress && (
					<ProgressBar
						className="w-full"
						start={courseProgress.finishedExercisesCount}
						end={courseProgress.allExercisesCount}
					/>
				)}
				<div className="flex justify-between">
					{courseLegend && (
						<div className="flex items-center space-x-2 text-xs font-semibold text-text">
							{courseLegend.viewsCount && (
								<span className="flex items-center">
									<Views className="w-4 h-4 mr-1 inline" />
									{courseLegend.viewsCount}
								</span>
							)}
							{courseLegend.commentsCount && (
								<span className="flex items-center">
									<Comments className="w-4 h-4 mr-1 inline" />
									{courseLegend.commentsCount}
								</span>
							)}
							{courseLegend.filesCount && (
								<span className="flex items-center">
									<Files className="w-4 h-4 mr-1 inline" />
									{courseLegend.filesCount}
								</span>
							)}
						</div>
					)}
					<div>
						<img
							onClick={() => navigate("/profile")}
							src={mentorData.image}
							className="w-6 h-6 rounded-full cursor-pointer"
							alt={mentorData.name}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
