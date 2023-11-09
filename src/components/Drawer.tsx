interface Props {
  position: string;
	children?: JSX.Element;
	header?: string;
	subheader?: string | JSX.Element;
	open: boolean;
	close: (n: boolean) => void;
}
const Drawer = (props: Props) => {
	const { position, header, subheader, children, open, close } = props;
	return (
		<>
			{position === 'right' && (
				<div className="overflow-scroll">
					{open && (
						<div
						className={`fixed overflow-hidden bg-black bg-opacity-40 z-40 inset-0 transform ease-in-out`}
						>
							<section
								className={
									'w-screen max-w-lg right-0 absolute bg-white h-full rounded-l-2xl shadow-xl duration-500 ease-in-out transition-all transform translate-x-0'
								}
							>
								<div className="relative flex flex-col space-y-3 overflow-y-scroll h-full">
									<div className="m-5">
									<h1 className="font-bold text-2xl mt-2">{header}</h1>
									<p className="text-base text-grey-slate mt-3">{subheader}</p>
									</div>
									<div className="mx-5">{children}</div>
								</div>
							</section>
							<section
								className=" w-screen h-full cursor-pointer"
								onClick={() => close(!open)}
							></section>
						</div>
					)}
				</div>
			)}

			{position === 'left' && (
				<>
					{open && (
						<div
							className={`fixed overflow-hidden rounded-3xl bg-black bg-opacity-40 z-40 inset-0 transform ease-in-out
          `}
						>
							<section
								className={
									'w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 rounded-3xl duration-500 ease-in-out transition-all transform translate-x-0'
								}
							>
								<h1 className="p-6 font-bold text-2xl">{header}</h1>
								<h3 className="p-4 font-bold text-lg">{subheader}</h3>
								{children}
							</section>
							<section
								className=" w-screen h-full cursor-pointer"
								onClick={() => close(!open)}
							></section>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Drawer;
