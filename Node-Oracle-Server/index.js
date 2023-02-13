const express = require('express');
const oracledb = require('oracledb');
const routes = express.Router()
const port = 9000;
const cors = require('cors')

var app = express();

app.use(express.json())
app.use(cors())

var connection;
var result;

var password = 'arnoldo'


const Connection = async () => {

    connection = await oracledb.getConnection({

        user: 'arnoldo',
        password: password,
        connectionString: '(DESCRIPTION=(ADDRESS=(host=localhost)(protocol=tcp)(port=1521))(CONNECT_DATA=(SERVICE_NAME=xe)))'

    })

}





async function InsertNewUser(req, res) {

    let data = req.body;

    console.log(`begin insertar_usuario('${data.name}', '${data.lastName}', '${data.email}', '${data.password}', '${data.address}', '${data.number}'); end;`);

    try {

        await Connection();
        console.log('connected to database')

        result = await connection.execute(`begin insertar_usuario('${data.name}', '${data.lastName}', '${data.email}', '${data.password}', '${data.address}', '${data.number}'); end;`)
        //await connection.commit();
        console.log(result);

    } catch (err) {

        return res.send(err.message);
    } finally {

        if (connection) {
            try {
                await connection.close();
                console.log('close connection success');

            } catch (err) {
                console.log(err.message);
            }
        }
        return res.send(result);
    }
}


async function validateEmail(req, res) {

    let data = req.body;
    console.log(data.email);

    try {

        await Connection();
        console.log('connected to database')

        result = await connection.execute(`Select Validar_correo('${data.email}') FROM DUAL`)
        await connection.commit();

    } catch (err) {

        return res.send(err.message);

    } finally {

        if (connection) {
            try {

                await connection.close();
                console.log('close connection success');

            } catch (err) {
                console.log(err.message);
            }
        }
        return res.send(result.rows);
    }

}






async function validateUser(req, res) {

    let data = req.body;

    try {

        await Connection();

        console.log('connected to database')

        result = await connection.execute(`SELECT Validar_usuario('${data.email}', '${data.password}') FROM DUAL`)

        console.log(result);

    } catch (err) {

        return res.send(err.message);

    } finally {

        if (connection) {
            try {

                await connection.close();
                console.log('close connection success');

            } catch (err) {
                console.log(err.message);
            }
        }

        return res.send(result);

    }

}

async function insertTurno(req, res) {
    
    let data = req.body

    console.log(data);

    try {

        await Connection()

        result = await connection.execute(`begin insertar_turno('${data.detalle}', '${data.comentario}', '${data.id}', '${data.incidencia}'); end;`)
        //await connection.commit();

        //result = await connection.execute(`select codi_turn from turno where fk_user='${data.id}' and stat_turn='active';`)

        console.log(result)
        
    } catch (err) {
        
        return res.send(err.message)

    }finally{

        if (connection) {
            try {

                await connection.close();
                console.log('close connection success');

            } catch (err) {
                console.log(err.message);
            }
        }

        return res.send(result);

    }

}


async function getTurno(req, res) {
    
    let data = req.body

    console.log(`select codi_turn from turno where fk_user='${data.id}' and stat_turn='active';`);

    try {

        await Connection()

        result = await connection.execute(`select codi_turn from turno where fk_user='${data.id}' and stat_turn='active'`)
        //await connection.commit();

        console.log(result)
        
    } catch (err) {
        
        return res.send(err.message)

    }finally{

        if (connection) {
            try {

                await connection.close();
                console.log('close connection success');

            } catch (err) {
                console.log(err.message);
            }
        }

        return res.send(result);

    }

}

async function getTurnoData(req, res) {
    
    let data = req.body
    console.log(data);

    try {

        await Connection()

        result = await connection.execute(`SELECT codi_turn, turno.fech_turn, usuario.name_user, usuario.last_user, 
        usuario.addr_user FROM turno JOIN usuario ON turno.fk_user = codi_user and codi_user=${data.user} and stat_turn='active'`)
        //await connection.commit();

        console.log(result)
        
    } catch (err) {
        
        return res.send(err.message)

    }finally{

        if (connection) {
            try {

                await connection.close();
                console.log('close connection success');

            } catch (err) {
                console.log(err.message);
            }
        }

        return res.send(result);

    }

}



async function tuputamadre(req, res) {
    
    let data = req.body
    console.log(data);

    try {

        await Connection()

        result = 'asdadsad'
        //await connection.commit();

        console.log(result)
        
    } catch (err) {
        
        return res.send(err.message)

    }finally{

        if (connection) {
            try {

                await connection.close();
                console.log('close connection success');

            } catch (err) {
                console.log(err.message);
            }
        }

        return res.send(result);

    }

}




app.post('/api/register', async (req, res) => {

    InsertNewUser(req, res);

})

app.post('/api/validateEmail', async (req, res) => {

    validateEmail(req, res);

})


app.post('/api/login', function (req, res) {

    validateUser(req, res)

})


app.post('/api/sendReport', function (req, res) {

    insertTurno(req, res) 

})

app.post('/api/getTurno', function (req, res) {

    getTurno(req, res) 

})

app.post('/api/TurnoData', function (req, res) {

    getTurnoData(req, res) 
})



app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))


