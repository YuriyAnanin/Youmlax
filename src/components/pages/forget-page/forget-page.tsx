import { Formik } from "formik";
import { BaseInput } from "../../UI/BaseInput";
import ForgetBg from "../../../media/images/forget-bg.png";

export const ForgetPage = () => {
	return (
		<div className="flex py-7 items-center ml-[129px]">
			<div>
				<h1 className="text-[42px] text-dark font-bold">Забыли пароль</h1>
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
						<form
							onSubmit={props.handleSubmit}
							className="mt-8 w-full max-w-[434px]"
						>
							<label className="block font-bold text-base text-dark">
								Email
								<BaseInput
									type="text"
									name="login"
									id="userLogin"
									className="mt-2"
									placeholder="Введите свой Email"
								/>
							</label>
							<div className="mt-8 flex">
								<button
									type="submit"
									className="h-16 rounded-xl bg-text text-[#fff] font-bold w-full transition hover:bg-dark"
								>
									Сбросить пароль
								</button>
							</div>
						</form>
					)}
				</Formik>
			</div>
			<div className="ml-[150px]">
				<img src={ForgetBg} alt="" />
			</div>
		</div>
	);
};
