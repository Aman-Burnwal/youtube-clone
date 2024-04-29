import { useMemo, useState } from "react";
import { TopicBtn, buttonList } from "../assets/index";


const Buttons = () => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(9);

    const leftSlide = () => {
        if (end === buttonList.length - 1) return;
        setStart((prevStart) => prevStart + 1);
        setEnd((prevEnd) => prevEnd + 1);
    };

    const rightSlide = () => {
        if (start === 0) return;
        setStart((prevStart) => prevStart - 1);
        setEnd((prevEnd) => prevEnd - 1);
    };

    const slicedButtonList = useMemo(() => buttonList.slice(start, end), [
        start,
        end,
    ]);

    return (
        <div className="pt-2 pl-2 w-full overflow-hidden">
            <ul className="flex   flex-row justify-evenly ">
                <button
                    onClick={leftSlide}
                    className=
                    {`bg-gray-400 duration-300 ease-linear 
                    h-8 w-8 cursor-pointer rounded-full
                     hover:text-white hover:bg-gray-700
                      ${end === buttonList.length - 1 ? "pointer-events-none" : ""
                        }`}
                    disabled={end === buttonList.length - 1}
                >
                    {"<"}
                </button>
                {slicedButtonList.map((list) => (
                    <TopicBtn key={list} value={list} />
                ))}
                <button
                    onClick={rightSlide}
                    className={`bg-gray-400 h-8 w-8 cursor-pointer rounded-full hover:text-white hover:bg-gray-700 ${start === 0 ? "pointer-events-none" : ""
                        }`}
                    disabled={start === 0}
                >
                    {">"}
                </button>
            </ul>
        </div>
    );
};

export default Buttons;
