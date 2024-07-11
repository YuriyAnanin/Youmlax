import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "../../components/pages/index-page/index-page";
import { LoginPage } from "../../components/pages/login-page/login-page";
import { RegistrationPage } from "../../components/pages/registration-page/registration-page";
import { ForgetPage } from "../../components/pages/forget-page/forget-page";

export const SiteRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<IndexPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/forget" element={<ForgetPage />} />
			</Routes>
		</BrowserRouter>
	);
};
