import React, { useState } from "react";
import Card from './Card';
import Button from 'react-bootstrap/Button';

const History = () => {
    const [cardsData, setCardsData] = useState([{}]);
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState('');
    const drRusData = [
        { date: 'drRusData 1', event: 'drRusData 1' },
        { date: 'drRusData 2', event: 'drRusData 2' },
        { date: 'drRusData 3', event: 'drRusData 3' },
        { date: 'drRusData 4', event: 'drRusData 4' }
    ];
    const imperData = [
        { date: 'imperData 1', event: 'imperData 1' },
        { date: 'imperData 2', event: 'imperData 2' },
        { date: 'imperData 3', event: 'imperData 3' },
        { date: 'imperData 4', event: 'imperData 4' }
    ];
    const sssrData = [
        { date: 'sssrData 1', event: 'sssrData 1' },
        { date: 'sssrData 2', event: 'sssrData 2' },
        { date: 'sssrData 3', event: 'sssrData 3' },
        { date: 'sssrData 4', event: 'sssrData 4' }
    ];
    const vovData = [
        { date: 'vovData 1', event: 'vovData 1' },
        { date: 'vovData 2', event: 'vovData 2' },
        { date: 'vovData 3', event: 'vovData 3' },
        { date: 'vovData 4', event: 'vovData 4' }
    ];
    const setHandler = (data, theme) => {
        setCardsData(data);
        setOpen(true);
        setTheme(theme);
    };

    return (
        <div>
            {open ?
                <>
                    <div>
                        <p>История - {theme}</p>
                    </div>
                    <Card data={cardsData}></Card>
                </>
                :
                <div className="d-grid gap-2 col-6 mx-auto" style={{ margin: '400px' }}>
                    <Button variant="success" size="lg" onClick={() => setHandler(drRusData, 'Древняя Русь')}>
                        Древняя Русь
                    </Button>
                    <Button variant="warning" size="lg" onClick={() => setHandler(imperData, 'Императорское время')}>
                        Императорское время
                    </Button>
                    <Button variant="success" size="lg" onClick={() => setHandler(sssrData, 'Советский союз')}>
                        Советский союз
                    </Button>
                    <Button variant="warning" size="lg" onClick={() => setHandler(vovData, 'Великая Отечественная война')}>
                        Великая Отечественная война
                    </Button>
                </div>
                // <ul>
                //     <li>
                //         <button onClick={() => setHandler(drRusData, 'Древняя Русь')}>Древняя Русь</button>
                //         <button onClick={() => setHandler(imperData, 'Императорское время')}>Императорское время</button>
                //     </li>
                //     <li>
                //         <button onClick={() => setHandler(sssrData, 'Советский союз')}>Советский союз</button>
                //         <button onClick={() => setHandler(vovData, 'Великая Отечественная война')}>Великая Отечественная война</button>
                //     </li>
                // </ul>
            }
            {/* <ul>
                <li>
                    <button onClick={() => setHandler(drRusData)}>Древняя Русь</button>
                    <button onClick={() => setHandler(imperData)}>Императорское время</button>
                </li>
                <li>
                    <button onClick={() => setHandler(sssrData)}>Советский союз</button>
                    <button onClick={() => setHandler(vovData)}>Великая Отечественная война</button>
                </li>
            </ul>
            {open &&
                <Card data={cardsData}></Card>
            } */}
        </div>
    );
}

export default History;