import { Formik } from "formik";
import { BaseInput } from "../../UI/BaseInput";
import { ReactComponent as Google } from "../../../media/icons/google-auth.svg";
import RegistrationBg from "../../../media/images/reg-bg.png";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex py-7 items-center ml-[129px]">
			<div className="mt-8 w-full max-w-[434px]">
				<h1 className="text-[42px] text-dark font-bold">Регистрация</h1>
				<p className="text-xs text-text">
					Легко и просто проходите обучение и создавайте его для других
				</p>
				<Formik
					initialValues={{ name: "jared" }}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<label className="block font-bold text-base text-dark">
								Имя пользователя
								<BaseInput
									type="text"
									name="userLogin"
									id="userLogin"
									className="mt-2"
									placeholder="Введите здесь свое имя пользователя"
								/>
							</label>
							<label className="block font-bold text-base text-dark mt-8">
								Email
								<BaseInput
									type="text"
									name="userEmail"
									id="userEmail"
									className="mt-2"
									placeholder="Введите свой Email"
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
							<label className="block font-bold text-base text-dark mt-8">
								Пароль
								<BaseInput
									type="password"
									name="userPassword"
									id="userPassword"
									placeholder="Введите пароль здесь"
								/>
							</label>
							<div className="mt-8 flex space-x-4">
								<button
									type="submit"
									className="h-16 rounded-xl bg-text text-[#fff] font-bold w-full transition hover:bg-dark"
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
				<p className="text-base text-text mt-[62px]">
					Уже есть аккаунт?&nbsp;
					<button
						onClick={() => navigate("/login")}
						className="text-base text-dark hover:text-text font-bold"
					>
						Войти сейчас
					</button>
				</p>
			</div>
			<div className="ml-[150px]">
				<img src={RegistrationBg} alt="" />
			</div>
		</div>
	);
};
