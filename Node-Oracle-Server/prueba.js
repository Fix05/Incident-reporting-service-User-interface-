
async function abc() {
  

  const oracledb = require('oracledb')

  let conn = await oracledb.getConnection({


    user: 'arnoldo',
    password: 'arnoldo',
    connectionString: '(DESCRIPTION=(ADDRESS=(host=localhost)(protocol=tcp)(port=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))'
  })


console.log('Succesfully connect');

await conn.execute("insert into Prueba values (6666)")
conn.commit()

console.log('Row inserted');

}

abc();

