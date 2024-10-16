import { ProgressBar } from "../../../../shared/components/ProgressBar";
import { EmployeeCourseProgress } from "../../../../types/EmployeesTypes";

type Props = {
	courseProgress: EmployeeCourseProgress;
	courseTitle: string;
};

export const EmployeesCoursesRow = ({ courseProgress, courseTitle }: Props) => {
	return (
		<div className="pb-4 border-b border-gray-border last:border-0 last:pb-0 flex items-center justify-between first:pt-0 pt-4">
			<p className="text text-[17px]">{courseTitle}</p>
			<ProgressBar
				start={courseProgress.finishedExercisesCount}
				end={courseProgress.allExercisesCount}
			/>
		</div>
	);
};
