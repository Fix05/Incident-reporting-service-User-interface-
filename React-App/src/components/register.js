import React, { useState, Fragment, useEffect } from 'react';
import logo from '../sources/EDISMACC_logo.png'
import Modal from './register/ModalConfirm.js'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function passValidation(password, confPass, funcion){

    if (password.length < 10) {
        return false
    } else if (!funcion(password)) {
        return false
    } else if (password != confPass) {
        return false
    } else {
        return true
    }

}


const Register = () => {

    const [datos, setDatos] = useState({

        name: "",
        lastName: "",
        email: "",
        number: "",
        address: "",
        password: "",
        confPass: ""

    })

    const requestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    }

    const [modal, setModal] = useState(false);

    const [pass, setPass] = useState('')

    const [email, setEmail] = useState('')


    const handleInputChange = (ev) => {

        setDatos({
            ...datos,
            [ev.target.name]: ev.target.value
        })

    }

    const charactersValidation = (string) => {

        var flag = 0
        const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const specialChar = ['.', '_', '-', '#', '@', '*', '/', '?', '¿', '&']

        for (const key in string) {
            let letter = string[key]
            if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 123) {
                flag = 1
                break
            }
        }

        if (!flag) return flag

        for (const key in specialChar) {
            if (string.includes(specialChar[key])) {
                flag = 1
                break
            } else {
                flag = 0
            }
        }

        if (!flag) return flag

        for (const key in num) {
            if (string.includes(num[key])) {
                flag = 1
                break
            } else {
                flag = 0
            }
        }
        return flag

    }


    const passValidation = () => {

        const passw = datos.password

        if (passw.length < 10) {
            setPass('La contraseña debe de tener al menos 10 caracteres')
        } else if (!charactersValidation(passw)) {
            setPass('La contraseña debe contener números, letras y carácteres especiales "@, #, &, ."')
        } else if (datos.password != datos.confPass) {
            console.log('NO COINCIDEEEEEE');
            setPass('Las contraseñas no coinciden')
        } else {
            setPass('')
            return true
        }

    }

    const emailValidation = async () => {

        console.log(requestInit.body)
        
        const res = await fetch('http://localhost:9000/api/validateEmail', requestInit)
        const data = await res.json();
        
        console.log(data);
        
        if (data[0][0]) {

            console.log('true');
            setEmail('');
            return true
            
        } else {
            
            console.log('false');
            setEmail('Ya existe una cuenta registrada con esta dirección de correo electrónico')
            return false

        }

    }



    //const InvalidName = () => <span className='text-red-700'>ohopnho</span>;

    const validate = async (event) => {

        event.preventDefault();

        const password = passValidation();
        const email = await emailValidation()

        console.log(password);


        if (password && email) {

            console.log(requestInit.body);

            const res = await fetch('http://localhost:9000/api/register', requestInit)
            const dat = await res.json();

           if (dat.code == undefined) {
                setModal(true)
                alert('Cuenta creada')
            } else {
                alert(`Error al crear la cuenta ${dat.code}`)
            }


        }


    }

    return (


        <Fragment>

            <section className=" bg-gray-50 dark:bg-gray-900" id='RegSection'>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" id='registerContainer'>

                    <div id='RegLogo' >
                        <img src={logo} alt="logo" />
                    </div>


                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" id='registerForm'>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Crear una cuenta
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={validate} action="#" >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input type="text" onChange={handleInputChange} name="name" id="name" className="form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pedro" required />
                                    <div className='alertMessage'>

                                    </div>


                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                    <input type="text" onChange={handleInputChange} name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coral" required />
                                    <div className='alertMessage'>

                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo electrónico</label>
                                    <input type="email" onChange={handleInputChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                    <div className='alertMessage'>
                                        <span>{email}</span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número telefónico</label>
                                    <input type="tel" onChange={handleInputChange} name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0985722940" required />
                                    <div className='alertMessage'>
                                        <span></span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                                    <input type="text" onChange={handleInputChange} name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="C. Cuenca entre Av. Quito y Galápagos" required />
                                    <div className='alertMessage'>
                                        <span></span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input type="password" onChange={handleInputChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <div className='alertMessage'>
                                        <span>{pass}</span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confPass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
                                    <input type="password" onChange={handleInputChange} name="confPass" id="confPass" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    <div className='alertMessage'>

                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Acepto los <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Términos y Condiciones</a></label>
                                    </div>
                                </div>
                                <button type="submit" className=" w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Ya tienes una cuenta?
                                    <Link to='/login'>
                                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Inicia sesión aquí</a>
                                    </Link>
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Modal state={modal}
                changeState={setModal}
            >
                <Content>
                    <h1 >Cuenta creada </h1>
                    <p>Con esta cuenta puedes iniciar sesión para acceder al servicio de reportes de incidencia</p>

                    <Link to='/login'>
                        <Button>
                            Iniciar sesión
                        </Button>
                    </Link>

                </Content>


            </Modal>


        </Fragment>

    );

}

export default Register


const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;