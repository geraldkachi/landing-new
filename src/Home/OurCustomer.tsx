import FaceCard1 from "../../assets/home/facecard.svg"
import "./testimoinal.css"
import { RefObject } from "react";

export const clients = [
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
]

interface OurCustomerProps {
    faqs: RefObject<HTMLDivElement>;
}

const OurCustomer = ({ faqs }: OurCustomerProps) => {
    return (
        <div ref={faqs} className="px-5 pt-10 pb-20 bg-[#043144]">
            <div className="max-w-7xl mx-auto mt-10 text-white testis">
                <div className="my-5 text-center">
                    <h1 className="text-3xl md:text-[40px] my-5">What Our 2M+ Customers Are Saying</h1>
                    <p>We always put our customers first at Arvo</p>
                </div>
            </div>
        </div>
    )
}

export default OurCustomer
