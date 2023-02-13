import React, { useState, Fragment } from 'react';
import logo from '../sources/EDISMACC_logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const buttonStyle = {

  background: 'linear-gradient(to right, #0f800f, #03844e, #028094, #0389ba)'
}

const div1Styles = {
  background: 'linear-gradient(to right, #0f800f, #03844e, #028094, #0389ba)'
}

export async function validar(){

  const requestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({email:'arnoglez05@gmail.com', password:'123'})
}

  const res = await fetch('http://localhost:9000/api/login', requestInit)
  const data = await res.json();
  console.log(data);
  return data.rows;

}



const Login = () => {

  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }


  const enviarDatos = async (event) => {
    event.preventDefault();

    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    }

    const validar = async () => {

      

      const res = await fetch('http://localhost:9000/api/login', requestInit)
      const data = await res.json();
      console.log(data);
      return data.rows;

    }

    var data = await validar()

    let id = data[0][0];

    if (data[0][0]) {

      alert('Datos correctos')

      await window.location.replace(`/report/${id}`)

     
    } else {
      alert('Correo o contraseña incorrecta, por favor intentelo de nuevo')
    }

  }

  return (

    <Fragment>

      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full" id="uncentrable">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src={logo}
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Somos EDISMAC</h4>
                      </div>
                      <form
                        onSubmit={enviarDatos}>
                        <p className="mb-4">Por favor inicie sesión con su cuenta</p>
                        <div className="mb-4">
                          <input
                            type='email'
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Nombre de Usuario"
                            name='email'
                            required
                            onChange={handleInputChange}


                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            name='password'
                            placeholder="Contraseña"
                            required
                            onChange={handleInputChange}

                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            value="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={buttonStyle}
                          >
                            Iniciar sesión
                          </button>
                          <a className="text-gray-500" href="#!">¿Se te olvidó tu contraseña?</a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">¿Aún no tienes una cuenta?</p>

                          <Link to='/register'>
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Regístrate
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={div1Styles}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">Permítenos ayudarte con tus problemas</h4>
                      <p className="text-sm">
                        Utiliza tus credenciales para iniciar sesión y acceder al servicio de ayuda de EDISMAC.
                        No te preocupes si no recuerdas tus credenciales, puedes recuperarlas. Si aun no tienes
                        un usuario y una contraseña puedes registrarte dando clic en el botón "Regístrate".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Fragment>

  );
}

export default Login;
