import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "../../components/pages/index-page/index-page";
import { LoginPage } from "../../components/pages/login-page/login-page";

export const SiteRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<IndexPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};
