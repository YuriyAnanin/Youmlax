import { EmployeesTable } from "./components/employees-table";
import { EmployeesHeader } from "./components/header";

export const EmployeesPage = () => {
	return (
		<section className="mt-[52px]">
			<EmployeesHeader />
			<EmployeesTable tableClassName="mt-[82px]" />
		</section>
	);
};
