import React from 'react'
import Link from "next/link";
import {Service} from "@/lib/types";

interface Card {
    cards : Service[];
}

const FeaturesCard = ({cards}: Card) => {
    return (
        <>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className={"group border border-[#0000001A] rounded-4xl p-9 bg-white transform transition-all duration-300 ease-out hover:-translate-y-[50px] hover:bg-blue-600 flex flex-col gap-9"}>
                    <div
                        className="w-24 h-24 bg-[#0B63E526] rounded-xl flex justify-center items-center transition-colors duration-300 group-hover:bg-blue-700">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="/public/Images/test-tube-svgrepo-com.svg"
                            className="transition-colors duration-300 group-hover:text-white"
                        >
                            <path d="M12 2L2 22h20L12 2z" fill="currentColor"/>
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-alex font-normal transition-colors duration-300 group-hover:text-white">
                            {card.title}
                        </h3>
                        <p className="text-sm font-light font-alex leading-8 transition-colors duration-300 group-hover:text-white">
                            {card.descp}
                        </p>
                    </div>

                    <div>
                        <Link href="/"
                              className="cursor-pointer inline-flex items-center font-alex transition-all duration-300 text-[#0B63E5] group-hover:underline group-hover:text-white">
                            <p>Learn More <i
                                className="ri-arrow-right-line hidden group-hover:inline-block ml-3 text-xl"></i></p>
                        </Link>
                    </div>
                </div>

            ))}
        </>
    );
};
export default FeaturesCard