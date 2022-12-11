import React, { useState, useEffect } from 'react';
import '../styles/Card.css';

const Card = ({ data }) => {
    // const cardData = [
    //     { date: '111', event: '1111' },
    //     { date: '222', event: '2222' },
    //     { date: '333', event: '3333' },
    //     { date: '444', event: '4444' }
    // ];

    const [count, setCount] = useState(0);
    const [randomCard, setRandomCard] = useState([{}]);

    const nextCard = () => {
        console.log('count', count)
        console.log('randomCard.length - 1', randomCard.length - 1)
        if (count < randomCard.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }

    };
    const deleteAnswered = () => {
        // console.log('count', count)
        // console.log('randomCard.length - 1', randomCard.length - 1)
        if (count < randomCard.length - 1 || (count + randomCard.length - 1 === 0)) {
            setRandomCard(randomCard.filter((v, i) => i !== count));
        }
    };

    useEffect(() => {
        setRandomCard(data.sort(() => Math.random() - 0.5));
    }, []);

    return (
        <div className="wrap">
            <div className="card">
                <>
                    <div className="front"><span>{randomCard[count].event}</span></div>
                    <div className="back"><span>{randomCard[count].date}</span></div>
                    <button className='button' style={{ left: '80%', backgroundColor: '#1ABC9C' }} onClick={deleteAnswered}>Ответил</button>
                    <button className='button' style={{ left: '-12%', backgroundColor: '#E74C3C' }} onClick={nextCard}>Не ответил</button>
                </>
            </div>
        </div >
    );
}

export default Card;