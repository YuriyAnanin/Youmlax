import clsx from "clsx";

type Props = {
	link: string;
	text: string;
	isActive?: boolean;
};

export const InsideSidebarRow = ({ link, text, isActive }: Props) => {
	return (
		<a
			href={link}
			className={clsx(
				"h-16 p-4 w-full flex items-center font-bold text-lg transition duration-200",
				isActive
					? "bg-dark text-white rounded"
					: "border-b border-gray-border text-dark bg-white hover:bg-opacity-80 hover:bg-gray hover:rounded"
			)}
		>
			{text}
		</a>
	);
};
