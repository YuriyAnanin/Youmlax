import StudentBg from "../../../media/images/student.png";
import MentorBg from "../../../media/images/mentor.png";
import { useNavigate } from "react-router-dom";

export const SelectProfilePage = () => {
	const navigate = useNavigate();

	return (
		<div className="h-[100vh] flex items-start justify-center flex-col max-w-[1100px] mx-auto">
			<h1 className="text-[42px] text-dark font-bold">
				Войти как ментор или как студент?
			</h1>
			<div className="flex mt-[126px] space-x-[198px] justify-center w-full">
				<div className="text-center max-w-[434px]">
					<p className="font-bold text-lg text-dark text-left h-[46px]">
						Продолжите свое обучение как студент
					</p>
					<img src={StudentBg} alt="" className="mt-16 h-[203px]" />
					<button
						onClick={() => navigate("/my-learning")}
						className="h-16 rounded-xl bg-dark text-[#fff] font-bold w-full transition hover:bg-opacity-80 mt-7"
					>
						Войти как студент
					</button>
				</div>
				<div className="text-center max-w-[434px]">
					<p className="font-bold text-lg text-dark text-left h-[46px]">
						Вам дали доступ ментора. Создавайте программы обучения
					</p>
					<img src={MentorBg} alt="" className="mt-16 h-[203px]" />
					<button
						onClick={() => navigate("/employees")}
						className="h-16 rounded-xl bg-dark text-[#fff] font-bold w-full transition hover:bg-opacity-80 mt-7"
					>
						Войти как ментор
					</button>
				</div>
			</div>
		</div>
	);
};
