import React from 'react'
import aportes from '../../assets/aportes.png'
import './Bancanos.css'
import mercadoPago from '../../assets/mercadoPago.png'

export default function Bancanos() {

    const handleClick = (e) => {
        if (e.target.name === '100') window.open('https://www.mercadopago.com.ar/checkout/v1/payment/redirect/?preference-id=52361845-f12880b4-17e9-422c-91b9-f10d9c262785', "_blank")

        if (e.target.name === '200') window.open('https://www.mercadopago.com.ar/checkout/v1/payment/redirect/?preference-id=52361845-c06724c4-db07-47ab-bdfa-2a80840e2606', "_blank")

        if (e.target.name === '500') window.open('https://www.mercadopago.com.ar/checkout/v1/payment/redirect/?preference-id=52361845-e1dcf76f-ba14-4888-bc2f-0071b7803be6', "_blank")

        if (e.target.name === '1000') window.open('https://www.mercadopago.com.ar/checkout/v1/payment/redirect/?preference-id=52361845-4bc5068f-df66-4daf-ba74-4b1682899d88', "_blank")
    }
    
    return (
        <div className='bancanos'>
            <img src={aportes} alt='aportes' />
            <div className='mercadoPago'>
                <img src={mercadoPago} alt='mercadoPago' id='mpLogo'/>
                <button type='button' onClick={handleClick} name='100'>$100</button>
                <button type='button' onClick={handleClick} name='200'>$200</button>
                <button type='button' onClick={handleClick} name='500'>$500</button>
                <button type='button' onClick={handleClick} name='1000'>$1000</button>
            </div>
        </div>
    )
}
