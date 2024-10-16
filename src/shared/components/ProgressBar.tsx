import clsx from "clsx";

type Props = {
	start: number;
	end: number;
	labelText?: string;
};

export const ProgressBar = ({ start, end, labelText = "Осталось" }: Props) => {
	const progress = (start / end) * 100;
	const progressLeft = Math.round(100 - progress);

	return (
		<div className="w-[132px] text-xs">
			<div className="rounded-lg bg-gray overflow-hidden h-2 relative">
				<span
					aria-hidden
					className={clsx("h-full absolute top-0 left-0 z-10 bg-pink")}
					style={{ width: `${progress}%` }}
				/>
			</div>
			<p className="flex justify-between mt-1">
				<span>
					{labelText} {progressLeft}%
				</span>
				<span>
					{start}/{end}
				</span>
			</p>
		</div>
	);
};
