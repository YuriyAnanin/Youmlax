import clsx from "clsx";
import { ReactNode } from "react";
import { ReactComponent as Eye } from "../../../../media/icons/eye.svg";

type Props = {
	className?: string;
	type?: string;
	name: string;
	id?: string;
	placeholder?: string;
	children?: ReactNode;
};

export const BaseInput = ({
	className,
	type,
	name,
	id,
	placeholder,
}: Props) => {
	return (
		<div className="relative">
			<input
				className={clsx(
					className,
					"bg-gray-light rounded-2xl text-base font-normal text-dark placeholder:text-text block h-16 py-5 px-4 outline-none border-[1.5px] w-full border-gray"
				)}
				type={type ? type : "text"}
				id={id}
				name={name}
				placeholder={placeholder ? placeholder : ""}
			/>
			{type === "password" && (
				<Eye
					cursor="pointer"
					className="h-6 min-w-6 transition hover:scale-105 absolute right-4 top-5 z-10"
				/>
			)}
		</div>
	);
};
