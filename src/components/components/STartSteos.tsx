const StartSteps = ({  text }: { number?: string, text: string }) => (
    <div className={`flex justify-center items-center flex-row`}>
        <div
            className={`flex justify-center items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="16" viewBox="0 0 38 16" fill="none">
                <ellipse cx="19" cy="8" rx="19" ry="8" fill="#9E7F56" />
            </svg>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
            {text}
        </p>
    </div>
);

export default StartSteps;
