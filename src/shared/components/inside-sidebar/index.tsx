import clsx from "clsx";
import { InsideSidebarRow } from "./sidebar-row";
import { ReactComponent as Plus } from "../../../media/icons/plus.svg";

type Props = {
	labels: {
		text: string;
		link: string;
		isActive?: boolean;
	}[];
	className?: string;
	title?: string;
	handleAddLabel?: () => void;
};

export const InsideSidebar = ({
	labels,
	title,
	className,
	handleAddLabel,
}: Props) => {
	return (
		<div
			className={clsx(
				"bg-white rounded-lg p-4 w-full max-w-[200px] shrink-0 h-max",
				className
			)}
		>
			{title && <h2 className="text-xl text-dark font-bold mb-6">{title}</h2>}
			<div>
				{labels.map((label) => (
					<InsideSidebarRow
						link={label.link}
						text={label.text}
						isActive={label.isActive}
					/>
				))}
				{handleAddLabel && (
					<button
						onClick={handleAddLabel}
						className="flex w-full items-center justify-center h-16 bg-[#f9f9f9] transition duration-200 hover:bg-gray border-b border-gray-border"
					>
						<Plus className="w-[18px] h-[18px]" />
					</button>
				)}
			</div>
		</div>
	);
};
