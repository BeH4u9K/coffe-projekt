import React, { useState } from 'react';

const Coffe_promo = () => {

    const[Name,setName,] = useState('');
    const[Email,setEmail,] = useState('');
    const[Phone,setPhone,] = useState('');
    function chek(){

        let fullname = [Name,Email,Phone];
        console.log(fullname);
        setName("")
        setEmail("")
        setPhone("")
    }


    return (
        <div className='promocod'>

            <div className='blok-registretion'>
                <div className='header-text-registretion'>
                    Получи промокод прямо сейчас
                </div>
                <div className='cese-input'>
                    <div className='coffe-lot-logo'>
                    </div>
                    <div className='input-registretion'>
                        <input value={Name} onChange={e => setName(e.target.value)} id='input1' placeholder="Имя"  className='input' type="text" />
                        <input value={Email} onChange={e => setEmail(e.target.value)} id='input2' placeholder="E-mail" className='input' type="email" />
                        <input value={Phone} onChange={e => setPhone(e.target.value)} id='input3' placeholder="Тeлефон" className='input' type='number' />
                        <button id="btn" onClick={chek} className='btn-registretion'>Получить промокод</button>
                    </div>
                    <div className='coffe-few-logo'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffe_promo;