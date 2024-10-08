import clsx from "clsx";
import { FC, ReactNode } from "react";

type ButtonVariants = "border" | "fill" | "dark";

type Props = {
	variant?: ButtonVariants;
	children: ReactNode;
	className?: string;
};

export const BasicButton: FC<Props> = ({ variant, children, className }) => {
	return (
		<button
			className={clsx(
				"flex items-center justify-center rounded-lg h-[56px] transition duration-200 shrink-0",
				className,
				variant === "border" && "bg-white border hover:border-dark",
				variant === "dark" &&
					"bg-dark text-white text-sm font-bold hover:opacity-90"
			)}
		>
			{children}
		</button>
	);
};
