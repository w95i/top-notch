"use client"
import React, {useState, useEffect} from 'react'

const words = ["fastest", "easiest"];


const HeroSlogan = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[index];
            if (!isDeleting) {
                // Typing effect
                setText((prev) => currentWord.substring(0, prev.length + 1));
                setSpeed(100);
                if (text === currentWord) {
                    setTimeout(() => setIsDeleting(true), 4000); // Pause before deleting
                }
            } else {
                // Deleting effect
                setText((prev) => currentWord.substring(0, prev.length - 1));
                setSpeed(50);
                if (text === '') {
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        };

        const typingInterval = setTimeout(handleTyping, speed);
        return () => clearTimeout(typingInterval);
    }, [text, isDeleting]);


    return (
        <div className='title-hero w-11/12 md:h-56 xl:h-80 flex justify-between items-center'>
            <div className="text-white sm:text-2xl md:text-4xl xl:text-8xl p-7 font-bold uppercase">
                <p className='flex items-center gap-2'>
                    We are
                    <span className='w-auto'>
                            <span key={index} className="changed-text">
                                {text}
                                <span className="cursor"></span>
                            </span>
                        </span>
                    way to
                </p>
                <p>
                    manage your accounts
                </p>
            </div>
            <img src='/Images/latters.png' alt='latters' className='latter-img'/>
        </div>
    )
}
export default HeroSlogan
