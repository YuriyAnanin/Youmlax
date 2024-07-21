import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegistrationPage } from "../../components/pages/registration-page/RegistrationPage";
import { ForgetPage } from "../../components/pages/forget-page/ForgetPage";
import { BaseLayout } from "../../components/UI/layout/base-layout/BaseLayout";
import { StatisticPage } from "../../components/pages/statistic-page/StatisticPage";
import { IndexPage } from "../../components/pages/index-page/IndexPage";

export const SiteRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<IndexPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/forget" element={<ForgetPage />} />
				<Route element={<BaseLayout />}>
					<Route path="/statistic" element={<StatisticPage />} />
					<Route path="/education" element={<StatisticPage />} />
					<Route path="/library" element={<StatisticPage />} />
					<Route path="/my-courses" element={<StatisticPage />} />
					<Route path="/profile" element={<StatisticPage />} />
					<Route path="/settings" element={<StatisticPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
