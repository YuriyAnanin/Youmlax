import { BaseInput } from "../../../UI/components/base-input/BaseInput";
import { BasicButton } from "../../../UI/components/buttons/BaseButton";
import { ReactComponent as Filter } from "../../../../media/icons/filter.svg";

export const EmployeesHeader = () => {
	return (
		<div className="flex items-center space-x-4 justify-start">
			<BaseInput
				id="search"
				name="search"
				placeholder="Найти сотрудника"
				variant="search"
				type="search"
				containerClassName="w-full max-w-[360px]"
				className="h-[56px] py-4 pl-12 pr-2 bg-white border-dark border-2 rounded-xl"
			/>
			<BasicButton variant="dark" className="px-4  rounded-xl">
				<span>+ Добавить нового</span>
			</BasicButton>
			<BasicButton
				variant="border"
				className="px-4 rounded-xl font-semibold hover:border-opacity-80 border-2"
			>
				<Filter />
				<span className="ml-2">Фильтры</span>
			</BasicButton>
		</div>
	);
};
