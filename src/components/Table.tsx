export enum ETableType {
	LINE = 'line',
	BORDER = 'border'
}

type TColumnType = {
	name: any
	key: string;
	defaultValue?: JSX.Element;
};

interface Props<T = any> {
	data: T[];
	type?: ETableType;
	column: TColumnType[];
}

const Table = ({ data, column, type }: Props) => {
	return (
		<>
			{type === 'line' && (
				<>
					<table className="table-auto w-full rounded-lg divide-y divide-grey-beau bg-white">
						<thead>
							<tr>
								{column?.map((item, index) => (
									<th
										key={index}
										className="px-6 py-4 text-left text-base font-bold"
									>
										{item.name}
									</th>
								))}
							</tr>
						</thead>
						{data && data.length > 0 ? (
							<tbody className="divide-y divide-grey-beau">
								{data.map((obj, index) => (
									<tr key={index} className="hover:bg-white-azure">
										{column.map((item, index) => (
											<td key={index} className="px-6 py-5 text-left text-sm">
												{obj[item?.key || item.name] || item.defaultValue}
											</td>
										))}
									</tr>
								))}
							</tbody>
						) : (
							<tbody className="">
								<tr>
									<td
										colSpan={column?.length}
										className="text-center p-10 text-2xl font-bold"
									>
										No data
									</td>
								</tr>
							</tbody>
						)}
					</table>
				</>
			)}
			{type === ETableType.BORDER && (
				<>
					<table
						className="tb w-full border-separate drop-shadow-lg"
						cellSpacing={0}
						style={{
							borderSpacing: '0 1rem'
						}}
					>
						<thead className="bg-white-azure border border-grey-beau">
							<tr>
								{column?.map((item, index) => (
									<th
										key={index}
										className="px-6 py-4 text-left text-base font-bold"
									>
										{item.name}
									</th>
								))}
							</tr>
						</thead>
						{data && data.length > 0 ? (
							<tbody className="divide-y divide-grey-beau">
								{data.map((obj, index) => (
									<tr key={index} className="bg-white hover:bg-white-azure">
										{column.map((item: any, index) => (
											<>
												<td
													key={index}
													className="border-y-8 border-white-azure px-6 py-5 text-left text-sm tracking-wider"
												>
													{obj[item?.key || item.name] || item.defaultValue}
												</td>
											</>
										))}
									</tr>
								))}
							</tbody>
						) : (
							<tbody className="divide-y divide-grey-slate">
								<tr>
									<td
										colSpan={column?.length}
										className="text-center p-10 text-2xl font-bold"
									>
										No data
									</td>
								</tr>
							</tbody>
						)}
					</table>
				</>
			)}
		</>
	);
};

export default Table;
