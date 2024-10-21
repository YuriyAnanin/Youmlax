import { Formik } from "formik";
import { BaseInput } from "../../UI/components/base-input/BaseInput";
import { ReactComponent as Google } from "../../../media/icons/google-auth.svg";
import InviteBg from "../../../media/images/reg-bg.png";
import { useNavigate } from "react-router-dom";

export const InvitePage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex py-7 items-center ml-[129px]">
			<div className="max-w-[624px]">
				<h1 className="text-[42px] text-dark font-bold">Регистрация</h1>
				<p className="text-xl text-dark">
					Вас пригласили в систему обучения в компанию ХХ, заполните информацию
					о себе, чтобы начать ваше обучение
				</p>
				<img src={InviteBg} alt="" className="mt-8 max-w-[527px]" />
			</div>
			<div className="mt-8 w-full max-w-[434px] ml-[150px]">
				<Formik
					initialValues={{ name: "jared" }}
					onSubmit={(values, actions) => {
						navigate("/select-profile");
					}}
				>
					{(props) => (
						<form onSubmit={props.handleSubmit} className="mt-8">
							<label className="block font-bold text-base text-dark mt-8">
								Email
								<BaseInput
									type="text"
									name="userEmail"
									id="userEmail"
									className="mt-2"
									placeholder="Введите свою почту"
								/>
							</label>
							<label className="block font-bold text-base text-dark mt-8">
								Номер телефона
								<BaseInput
									type="text"
									name="userPhone"
									id="userPhone"
									className="mt-2"
									placeholder="Введите свой номер телефона"
								/>
							</label>
							<label className="block font-bold text-base text-dark">
								Имя
								<BaseInput
									type="text"
									name="userName"
									id="userName"
									className="mt-2"
									placeholder="Введите ваше имя"
								/>
							</label>
							<label className="block font-bold text-base text-dark">
								Фамилия
								<BaseInput
									type="text"
									name="userSurname"
									id="userSurname"
									className="mt-2"
									placeholder="Введите вашу фамилию"
								/>
							</label>
							<label className="block font-bold text-base text-dark mt-8">
								Пароль
								<BaseInput
									type="password"
									variant="password"
									name="userPassword"
									id="userPassword"
									placeholder="Придумайте пароль"
								/>
							</label>
							<div className="mt-8 flex space-x-4">
								<button
									type="submit"
									className="h-16 rounded-xl bg-dark text-[#fff] font-bold w-full transition hover:bg-opacity-80"
								>
									Зарегистрироваться
								</button>
								<Google
									cursor="pointer"
									className="h-16 min-w-16 transition hover:scale-105"
								/>
							</div>
						</form>
					)}
				</Formik>
				<p className="text-base text-center text-text mt-4">
					Уже есть аккаунт?&nbsp;
					<button
						onClick={() => navigate("/")}
						className="text-base text-dark hover:text-text font-bold"
					>
						Войти сейчас
					</button>
				</p>
			</div>
		</div>
	);
};
