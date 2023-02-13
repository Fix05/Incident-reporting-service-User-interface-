import React from 'react'
import { useState, Fragment } from 'react';
import styled from 'styled-components';
import Modal from "./ModalReport.js";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function validateFields (details) {
    let flag = true

    if (details.detail=='') {
        flag = false;
    }else if (!details.comment) {
        flag = false;
    }else{
        flag = true;;
    }

    return flag
}





const Report = () => {

    const params = useParams();

    const [NoDetailMessage, setNoDetailMessage] = useState('');
    const [NoCommentMessage, setNoCommentMessage] = useState('');

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);

    const [report, setReport] = useState('')

    const setNull = () =>{
        setDetails({
            detail:'',
            comment:''  
        })
        setNoCommentMessage('');
        setNoDetailMessage('');
    }

    const handleInputChange1 = () =>{
        setModal1(!modal1);
        setReport('1')
        setNull();
    } 

    const handleInputChange2 = () => {
        setModal2(!modal2)
        setReport('2')
        setNull();
    } 
    const handleInputChange3 = () => {
        setModal3(!modal3)
        setReport('3')
        setNull();
    }
    const handleInputChange4 = () => {
        setModal4(!modal4)
        setReport('4')
        setNull();
    }

    const [details, setDetails] = useState({
        detail:'',
        comment:''
    });

    const getDetails = (ev) =>{

        setDetails({
            ...details,
            [ev.target.name]: ev.target.value  
        })
        
    }

    const validate = () => {
        let flag = true

        if (details.detail=='') {
            setNoDetailMessage('Es necesario completar este campo');
            flag = false;
        }else{
            setNoDetailMessage('');
        }
        if (!details.comment) {
            setNoCommentMessage('Es necesario completar este campo');
            flag = false;
        }else{
            setNoCommentMessage('');
        }

        return flag
    }

    const goToTurnPage = async () =>{

        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:params.id})
        }

        const res = await fetch('http://localhost:9000/api/getTurno', requestInit);
        const data = await res.json();

        window.location.replace(`/report/${params.id}/${data.rows[0][0]}`)

    }


    const sendReport = async() => {
     
        let datos = {
            comentario: details.comment,
            id: params.id,
            detalle: details.detail,
            incidencia: report
            
        }

        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(datos)
        }
        
    
        if (validate()) {

            let res = await fetch('http://localhost:9000/api/getTurno', requestInit);
            let data = await res.json();

            console.log(data.rows.length);

            if (!data.rows.length) {

                console.log('ENTRO AL IF');
                
                await fetch('http://localhost:9000/api/sendReport', requestInit);
                
                res = await fetch('http://localhost:9000/api/getTurno', requestInit);
                data = await res.json();

                console.log('se insertó un turno con el codigo' + data.rows[0][0]);

                
            }
            
            window.location.replace(`/report/${params.id}/${data.rows[0][0]}`)
            
        }
    }



    return (

        <Fragment  >
            <Container >
                <Card className="card">

                    <h1 className="mb-2 h2">Dinos tu problema</h1>

                    <Section className="card border-secondary" onClick={handleInputChange1} >

                        <Text className="card-body">
                            
                            <p>SIN INTERNET</p>

                        </Text>

                    </Section>

                    <Section className="card border-secondary" onClick={handleInputChange2}>

                        <Text className="card-body" >
                            
                            <p>INTERFERENCIAS EN EL INTERNET</p>

                        </Text>

                    </Section>

                    <Section className="card border-secondary" onClick={handleInputChange3 }>

                        <Text className="card-body">
                            
                            <p>INTERNET LENTO</p>

                        </Text>

                    </Section>

                    <Section className="card border-secondary " onClick={handleInputChange4}>

                        <Text className="card-body">
                            <p>EQUIPOS DAÑADOS</p>

                        </Text>

                    </Section>

                </Card>

            </Container>

            <Modal 
            state={modal1}
            changeState={setModal1}
            header={'No cuenta con servicio de internet'}
            >
                <Content>
                    
                    <form onChange={getDetails} onSubmit={sendReport}>
                        <Label>Desde cuando presenta este problema</Label>
                        <select name='detail' className="form-select" aria-label="Default select example">
                            <option value="" disabled selected>Selecciona una opción</option>
                            <option>Desde hoy</option>
                            <option>De uno a dos días</option>
                            <option>De tres a cuatro días</option>
                            <option>Cinco o más días</option>
                        </select>
                        <div className='alertMessage'>
                            <span>{NoDetailMessage}</span>
                        </div>
                        <Label>Dejanos alguna observación</Label>
                        <textarea name="comment" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <div className='alertMessage'>
                            <span>{NoCommentMessage}</span>
                        </div>
                    </form>

                    <Button onClick={sendReport}/*as={Link} to="/login"*/>        
                        Enviar reporte
                    </Button>

                </Content>


            </Modal>

            <Modal 
            state={modal2}
            changeState={setModal2}
            header={'Usted cuenta con interferencias en internet'}
            >
                <Content>
                <form onChange={getDetails} onSubmit={sendReport}>
                        <Label>Desde cuando presenta este problema</Label>
                        <select name='detail' className="form-select" aria-label="Default select example" >
                            <option value="" disabled selected>Selecciona una opción</option>
                            <option>Cada hora</option>
                            <option>Todo el día y noche</option>
                            <option>Solo en el día</option>
                            <option>Solo en la noche</option>
                        </select>
                        <div className='alertMessage'>
                            <span>{NoDetailMessage}</span>
                        </div>
                        <Label>Dejanos alguna observación</Label>
                        <textarea name="comment" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <div className='alertMessage'>
                            <span>{NoCommentMessage}</span>
                        </div>
                    </form>


                    <Button onClick={sendReport}/*as={Link} to="/login"*/>        
                        Enviar reporte
                    </Button>

                </Content>


            </Modal>

            <Modal 
            state={modal3}
            changeState={setModal3}
            header={'Tiene internet lento'}
            >
                <Content>
                <form onChange={getDetails} onSubmit={sendReport}>
                        <Label>Desde cuando presenta este problema</Label>
                        <select name='detail' className="form-select" aria-label="Default select example">
                            <option value="" disabled selected>Selecciona una opción</option>
                            <option>Desde hoy</option>
                            <option>De uno a dos días</option>
                            <option>De tres a cuatro días</option>
                            <option>Cinco o más días</option>
                        </select>
                        <div className='alertMessage'>
                            <span>{NoDetailMessage}</span>
                        </div>
                        <Label>Dejanos alguna observación</Label>
                        <textarea name="comment" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <div className='alertMessage'>
                            <span>{NoCommentMessage}</span>
                        </div>
                    </form>

                    <Button onClick={sendReport}/*as={Link} to="/login"*/>        
                        Enviar reporte
                    </Button>

                </Content>


            </Modal>

            <Modal 
            state={modal4}
            changeState={setModal4}
            header={'Tiene equipos dañados'}
            >
                <Content>
                <form onChange={getDetails} onSubmit={sendReport}>
                        <Label>Desde cuando presenta este problema</Label>
                        <select name='detail' className="form-select" aria-label="Default select example" >
                            <option value="" disabled selected>Selecciona una opción</option>
                            <option>Router</option>
                            <option>Antenas</option>
                            <option>Cables</option>
                            <option>Cargadores y poes</option>
                        </select>
                        <div className='alertMessage'>
                            <span>{NoDetailMessage}</span>
                        </div>
                        <Label>Dejanos alguna observación</Label>
                        <textarea name="comment" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <div className='alertMessage'>
                            <span>{NoCommentMessage}</span>
                        </div>
                    </form>

                    
                    <Button onClick={sendReport}/*as={Link} to="/login"*/>        
                        Enviar reporte
                    </Button>
                     

                </Content>


            </Modal>

        </Fragment>


    );
}

export default Report;

const Container = styled.div`
display: flex;
justify-content: center;
height: 100%;
background-repeat: no-repeat;
background-position: 0 0;
background-size: cover;
background-color: rgb(15, 131, 146);
background: linear-gradient(to right, #0f800fb5, #03844eb6, #028094b3, #0389bab0);
`;

const Card = styled.div`
top: 50px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: space-around;
justify-content: center;
width: 500px;
height: 600px;
border-radius: 10px;
background-color: #cfcfcf82;

`;


const Section = styled.div`

display: flex;
align-items: center;
width: 70%;
height: 70px;
cursor: pointer;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
transition: .5s ease all;
background-color: #ededed;
&:hover {
    background-color: #d7d7d7f1;
  }

`;


const Text = styled.div`
display: flex;
align-items: center;
font-size: 20px;
`;








const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
    text-align: center;
	h1 {
		font-size: 40px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
        
		font-size: 18px;
		margin-bottom: 20px;
	}

`;

const Button = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
    margin-top: 25px;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Label = styled.label`
margin: 15px 0 12px 0;
`;