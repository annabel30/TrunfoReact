import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { CardService } from '../../service';

import './RemoverCarta.css';

import Navbar from "../navbar/Navbar";
import SelectCartas from '../selectCartas/SelectCartas';

function RemoverCarta() {

    const [selectValue, setSelectValue] = useState('');

    function handleChange(e) {
        setSelectValue(e.target.value);
    }

    const deletar = (event) => {
        event.preventDefault()
        window.location.reload()
        CardService.deletar(selectValue)
    }

    return (
        <>
            <Navbar />
            <div className='boxPageRemoverCarta'>
                <Form className='form-delete-card'>
                    <div>Escolha a carta para remover</div>

                    <Form.Select value={selectValue} aria-label="Default select example" className='select-card' onChange={handleChange}>
                        <SelectCartas />
                    </Form.Select>

                    <Button variant="primary" type="submit" onClick={deletar} className="botaoRemoverCarta">
                        Everything... was futile...
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default RemoverCarta;