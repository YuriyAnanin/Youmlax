import clsx from "clsx";
import { ReactNode } from "react";
import { ReactComponent as Eye } from "../../../../media/icons/eye.svg";
import { ReactComponent as Search } from "../../../../media/icons/search.svg";

type InputTypes = "search" | "password";

type Props = {
	className?: string;
	containerClassName?: string;
	variant?: InputTypes;
	type?: string;
	name: string;
	id?: string;
	placeholder?: string;
	children?: ReactNode;
};

export const BaseInput = ({
	className,
	containerClassName,
	variant,
	type,
	name,
	id,
	placeholder,
	children,
}: Props) => {
	return (
		<div className={clsx("relative", containerClassName)}>
			<input
				className={clsx(
					className,
					"bg-gray-light rounded-2xl text-base font-normal text-dark placeholder:text-text block h-16 py-5 px-4 outline-none border-[1.5px] w-full border-gray"
				)}
				type={type ? type : "text"}
				id={id}
				name={name}
				placeholder={placeholder}
			/>
			{variant === "password" && (
				<Eye
					cursor="pointer"
					className="h-6 min-w-6 transition hover:scale-105 absolute right-4 top-5 z-10"
				/>
			)}
			{variant === "search" && (
				<Search className="h-6 min-w-6 absolute left-4 top-4 z-10" />
			)}
			{children}
		</div>
	);
};
