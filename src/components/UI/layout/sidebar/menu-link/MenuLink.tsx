import clsx from "clsx";
import { FC, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
	href: string;
	target?: string;
	active?: boolean;
	children: ReactElement | string;
	className?: string;
	disabled?: boolean;
};

export const MenuLink: FC<Props> = ({
	href,
	target,
	active,
	children,
	className,
	disabled,
}) => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<button
			onClick={() => navigate(href)}
			disabled={disabled}
			className={clsx(
				"text-base py-2 px-3 transition rounded-xl text-left w-full",
				!disabled && "hover:bg-dark hover:text-white",
				currentPath === href || active
					? "text-white font-bold bg-dark rounded-lg"
					: "text-text",
				className
			)}
		>
			{children}
		</button>
	);
};
