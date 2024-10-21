import { Formik } from "formik";
import { BaseInput } from "../../UI/components/base-input/BaseInput";
import { ReactComponent as Google } from "../../../media/icons/google-auth.svg";
import LoginBg from "../../../media/images/login-bg.png";
import { useNavigate } from "react-router-dom";

export const IndexPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex py-7 items-center h-[100vh] ml-[129px]">
			<div className="mt-8 w-full max-w-[434px]">
				<h1 className="text-[42px] text-dark font-bold">Добро пожаловать!</h1>
				<p className="text-xl text-dark">
					С возвращением! Войдите в свою учетную запись, чтобы продолжить работу
				</p>
				<Formik
					initialValues={{ name: "jared" }}
					onSubmit={(values, actions) => {
						navigate("/employees");
					}}
				>
					{(props) => (
						<form onSubmit={props.handleSubmit} className="mt-8">
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
								Пароль
								<BaseInput
									type="password"
									variant="password"
									name="userPassword"
									id="userPassword"
									placeholder="Введите пароль здесь"
								/>
							</label>
							<button
								onClick={() => navigate("/forget")}
								className="text-base text-dark mt-6 block hover:text-text"
							>
								Забыли пароль?
							</button>
							<div className="mt-8 flex space-x-4">
								<button
									type="submit"
									className="h-16 rounded-xl bg-dark text-[#fff] font-bold w-full transition hover:bg-opacity-80"
								>
									Войти
								</button>
								<Google
									cursor="pointer"
									className="h-16 min-w-16 transition hover:scale-105"
								/>
							</div>
						</form>
					)}
				</Formik>
				<p className="text-base text-text mt-[133px]">
					Нет аккаунта?&nbsp;
					<button
						onClick={() => navigate("/registration")}
						className="text-base text-dark hover:text-text font-bold"
					>
						Зарегистрироваться
					</button>
				</p>
			</div>
			<div className="ml-[150px]">
				<img src={LoginBg} alt="" />
			</div>
		</div>
	);
};
