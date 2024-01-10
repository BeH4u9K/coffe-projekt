import React from 'react';

const Coffe_header = () => {
    return (
        <div className='Coffe_header'>
            <div className='bloc-Btn'>
                <div className="button-text">
                    <div className='logoHeader-svg'></div>
                    <div className='button-info'>
                        <button  className='home'>Главная</button>
                        <button  className='product'>Наш товар</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffe_header;