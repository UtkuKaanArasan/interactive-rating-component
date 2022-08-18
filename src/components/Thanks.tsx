// Type checking for functional component
import { FC } from "react";
// Image import
import image from "../images/illustration-thank-you.svg";

interface ThanksProps {
    rating: number
}

const Thanks: FC<ThanksProps> = ({ rating }) => {
    return (
        <div className="bg-Very-Dark-Blue w-9/10 p-4 m-2 rounded-2xl sm:w-1/2 lg:w-1/3 2xl:w-1/4 text-center ">
            <div className="flex justify-center mx-2 my-4">
                <img src={image} alt="thanks" />
            </div>
            <div className="bg-Dark-Blue rounded-3xl p-1 m-2">
                <p className="text-Orange">You selected {rating} out of 5</p>
            </div>
            <h1 className="text-White mx-2 my-4 text-Heading">Thank you</h1>
            <p className="text-Light-Grey mx-2 my-4">We appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}

export default Thanks;