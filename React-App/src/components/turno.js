import React from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState, Fragment } from 'react';

const Turno = ()  => {

    const [Data, setData] = useState({
        turno: '',
        fecha: '',
        nombre: '',
        apellido: '',
        direc: ''

    });

    const params = useParams();
   

    const datos = {
        user: params.id,
    }

    const requestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    }


    useEffect(() => {
        const fetchData = async () => {
        
            const res = await fetch('http://localhost:9000/api/TurnoData', requestInit)
            const data = await res.json(); 

            setData({
                turno: data.rows[0][0],
                fecha: data.rows[0][1],
                nombre: data.rows[0][2],
                apellido: data.rows[0][3],
                direc: data.rows[0][4]
            })
        };
      
        fetchData();
    }, []);
      

    return ( 

    <Fragment>
        <Section>
        <Div href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Se le ha asignado un turno</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Gracias por contactar con nosotros. Le hemos asignado un turno con código <b>{Data.turno}</b> para el día <b>{Data.fecha.substring(0,10)}</b> a nombre de <b>{Data.nombre} {Data.apellido}</b>. Por favor esté atento en la dirección especificada <b>"{Data.direc}"</b>.</p>
        </Div>

        </Section>
        
    </Fragment>

     );
}
 
export default Turno;

const Section = styled.div`



`;

const Div = styled.div`
position: relative;
top: 150px;
margin: 0 auto;


`;