import clsx from "clsx";
import UserImg from "../../../../media/images/profile.jpg";

type Props = {
	tableClassName?: string;
};

export const EmployeesTable = ({ tableClassName }: Props) => {
	const tableHeaderGrid =
		"grid grid-cols-[224px_150px_160px_250px_160px] space-x-4";
	const tableBodyGrid = "grid grid-cols-[224px_150px_160px_360px]";

	return (
		<div className={clsx(tableClassName)}>
			<ul className={clsx(tableHeaderGrid, "px-4 text-lg font-extrabold")}>
				<li>Имя</li>
				<li>Должность</li>
				<li className="text-center">Почта</li>
				<li className="text-center">Текущее обучение</li>
				<li className="text-center">Прогресс</li>
			</ul>
			<ul
				className={clsx(
					"mt-3 bg-white rounded-2xl px-4 py-5 border border-gray-border",
					tableBodyGrid
				)}
			>
				<li className="border-r border-gray-border">
					<div className="flex items-center pb-4 pr-7 border-b border-gray-border h-[67px]">
						<img
							src={UserImg}
							className="w-[56px] h-[56px] rounded-full"
							alt="user"
						/>
						<div className="ml-3">
							<p className="text-lg font-extrabold">Angela Vatiga</p>
							<p className="mt-[5px] text-green font-medium">Id - 123</p>
						</div>
					</div>
					<div className="flex items-center pr-7 mt-[14px] pl-4">
						<p>Среднемесячная ежедневная активность</p>
						<p className="ml-3 font-medium text-2xl flex-shrink-0">1.4 ч</p>
					</div>
				</li>
				<li className="border-r border-gray-border">
					<div className="px-7 border-b border-gray-border h-[67px]">
						<p className="text-lg font-extrabold">Дизайнер</p>
					</div>
					<div className="flex items-center px-7 mt-[14px]">
						<p>Задания ожидающие проверки </p>
						<p className="ml-3 font-medium text-2xl flex-shrink-0">4</p>
					</div>
				</li>
				<li className="border-r border-gray-border">
					<div className="px-7 border-b border-gray-border h-[67px]">
						<p className="text-lg font-extrabold">an@gmail.com</p>
					</div>
					<div className="flex items-center px-7 mt-[14px]">
						<p>Количество завершенных курсов</p>
						<p className="ml-3 font-medium text-2xl flex-shrink-0">4</p>
					</div>
				</li>
				<li className="text-center">Текущее обучение</li>
			</ul>
		</div>
	);
};
