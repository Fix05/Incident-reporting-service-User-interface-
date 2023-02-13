const oracledb = require('oracledb')

var connection;

var password = 'admin'


async function checkConnection() {
    
    try {

        connection = await oracledb.getConnection({

            user: 'system',
            password: password,
            connectionString: "(DESCRIPTION=(ADDRESS=(host=localhost)(protocol=tcp)(port=1521))(CONNECT_DATA=(SERVICE_NAME=XE)))"
        });

        console.log('connected to database');
        
    } catch (err) {
        
        console.error(err.message);
    } finally {

        if(connection) {

            try {

                await connection.close();
                console.log('close connection succes');

                
            } catch (err) {
                
                console.error(err.message);
            }
        }

    }

}

checkConnection();