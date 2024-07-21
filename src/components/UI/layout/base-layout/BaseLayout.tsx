import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";

export const BaseLayout = () => {
	return (
		<main className="flex pt-5 px-6">
			<Sidebar />
			<section>
				<Header />
				<Outlet />
			</section>
		</main>
	);
};
