import React, { useState } from 'react';
import icon from '../images/icon-star.svg';

const Rating = () => {

    const [rating, setRating] = useState<number>(0);

    function ratingButtonHandler(e: any): void {
        // I tried everything yet I couldn't add type checking
        setRating(parseInt(e.target.innerText))
    }

    return (
        <div className="bg-Very-Dark-Blue w-9/10 p-4 rounded-2xl sm:w-1/2 lg:w-1/3 2xl:w-1/4">
            <img
                src={icon}
                alt="icon"
                className='p-2 m-2 bg-Medium-Grey rounded-2xl'
            />
            <h1
                className='text-White m-2 text-Heading'
            >
                How did we do?
            </h1>
            <p className='text-Light-Grey m-2 text-base'>
                Please let us know how we did with your support request. All feedback is appricated to help us imporve our offering!
            </p>
            <div className='flex justify-around mx-2 mt-4 mb-2'>
                <div
                    className='rounded-3xl bg-Dark-Blue text-White px-4 py-2 hover:bg-Orange'
                    onClick={ratingButtonHandler}
                >1</div>
                <div
                    className='rounded-3xl bg-Dark-Blue text-White px-4 py-2 hover:bg-Orange'
                    onClick={ratingButtonHandler}
                >2</div>
                <div
                    className='rounded-3xl bg-Dark-Blue text-White px-4 py-2 hover:bg-Orange'
                    onClick={ratingButtonHandler}
                >3</div>
                <div
                    className='rounded-3xl bg-Dark-Blue text-White px-4 py-2 hover:bg-Orange'
                    onClick={ratingButtonHandler}
                >4</div>
                <div
                    className='rounded-3xl bg-Dark-Blue text-White px-4 py-2 hover:bg-Orange'
                    onClick={ratingButtonHandler}
                >5</div>
            </div>
            <div className='flex justify-center'>
                <button
                    className='
                    bg-Orange text-White text-center w-full m-2 p-2 rounded-3xl hover:bg-White hover:text-Orange'
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Rating;