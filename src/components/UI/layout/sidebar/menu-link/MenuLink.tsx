import clsx from "clsx";
import { FC, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
	href: string;
	target?: string;
	active?: boolean;
	children: ReactElement | string;
	className?: string;
};

export const MenuLink: FC<Props> = ({
	href,
	target,
	active,
	children,
	className,
}) => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<button
			onClick={() => navigate(href)}
			className={clsx(
				"text-base py-2 px-3 hover:bg-dark hover:text-white transition rounded-xl",
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
