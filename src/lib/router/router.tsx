import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegistrationPage } from "../../components/pages/registration-page/RegistrationPage";
import { ForgetPage } from "../../components/pages/forget-page/ForgetPage";
import { BaseLayout } from "../../components/UI/layout/base-layout/BaseLayout";
import { IndexPage } from "../../components/pages/index-page/IndexPage";
import { ChatPage } from "../../components/pages/chat/ChatPage";
import { CoursesPage } from "../../components/pages/courses/CoursesPage";
import { EmployeesPage } from "../../components/pages/employees/EmployeesPage";
import { SettingsPage } from "../../components/pages/settings/SettingsPage";
import { ProfilePage } from "../../components/pages/profile/ProfilePage";
import { InvitePage } from "../../components/pages/invite-page/InvitePage";
import { SelectProfilePage } from "../../components/pages/select-profile-page/SelectProfilePage";

export const SiteRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<IndexPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/forget" element={<ForgetPage />} />
				<Route path="/invite" element={<InvitePage />} />
				<Route path="/select-profile" element={<SelectProfilePage />} />
				<Route element={<BaseLayout />}>
					<Route path="/employees" element={<EmployeesPage />} />
					<Route path="/chat" element={<ChatPage />} />
					<Route path="/courses" element={<CoursesPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/settings" element={<SettingsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
