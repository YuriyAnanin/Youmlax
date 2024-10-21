import { ReactComponent as Stars } from "../../../../media/icons/stars.svg";
import { BasicButton } from "../../../UI/components/buttons/BaseButton";

export const MentorCoursesHeader = () => {
	return (
		<div className="flex items-center">
			<h1 className="text-3xl text-dark font-bold">Обучающие курсы</h1>
			<BasicButton variant="dark" className="px-7 ml-[108px] h-[47px]">
				<Stars className="w-4 h-4" />
				<span className="ml-3">Создать новый курс</span>
			</BasicButton>
			<BasicButton
				variant="border"
				className="w-[87px] border-gray relative font-bold ml-4 h-[47px]"
			>
				Выбрать
			</BasicButton>
		</div>
	);
};
