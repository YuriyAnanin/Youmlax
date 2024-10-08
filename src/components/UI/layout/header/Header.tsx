import { BaseInput } from "../../components/base-input/BaseInput";
import { BasicButton } from "../../components/buttons/BaseButton";
import { ReactComponent as Stars } from "../../../../media/icons/stars.svg";
import { ReactComponent as Bell } from "../../../../media/icons/bell.svg";
import UserImg from "../../../../media/images/profile.jpg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();

	return (
		<header className="p-3 rounded-lg bg-white w-full flex items-center space-x-4">
			<BaseInput
				id="search"
				name="search"
				placeholder="Поиск задачи"
				variant="search"
				type="search"
				containerClassName="w-full"
				className="h-[56px] py-4 rounded-lg pl-12 pr-2 bg-white"
			/>
			<BasicButton variant="dark" className="px-2">
				<Stars className="w-4 h-4" />
				<span className="ml-3">Создать новый урок</span>
			</BasicButton>
			<BasicButton variant="border" className="w-[56px] border-gray relative">
				<Bell className="w-6 h-6" />
				<span className="absolute top-4 right-[19px] w-[7px] h-[7px] rounded-full bg-red"></span>
			</BasicButton>
			<img
				onClick={() => navigate("/profile")}
				src={UserImg}
				className="w-[56px] h-[56px] cursor-pointer rounded"
				alt="user"
			/>
		</header>
	);
};
