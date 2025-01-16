import pool from "../db/connection.js";
import { v4 as uuidv4 } from "uuid";

async function signupRepository(userInformation) {
  // fullName: fullName,
  // address: address,
  // phoneNumber: phoneNumber,
  // emailAddress: emailAddress,
  // username: username,
  // password: password

  const created_at = new Date();
  const updated_at = new Date();
  const user_id = uuidv4();
  const account_id = uuidv4();

  const query1 = `INSERT INTO users(user_id, fullname, address, phone_number,
                     email_address, created_at, updated_at)
    VALUES($1, $2, $3, $4, $5, $6, $7);`;

  const query2 = `  INSERT INTO accounts(account_id, user_id,  username, password)
            VALUES($1, $2, $3, $4)`;

  const values1 = [
    user_id,
    userInformation.fullName,
    userInformation.address,
    userInformation.phoneNumber,
    userInformation.emailAddress,
    created_at,
    updated_at,
  ];

  const values2 = [
    account_id,
    user_id, 
    userInformation.username,
    userInformation.password,
  ];


  const  client = await pool.connect(); 

  try {

    // important ito! - 'BEGIN'
    await client.query('BEGIN')
    await client.query(query1, values1)
    await client.query(query2, values2)

    // commit the transaction 
    await client.query('COMMIT')

    return {message: "Quiries commited successfully - signupRepository"}

    
  } catch (err) {
    
    // undo the transaction if there are fail queries. 
    console.error("error performing queries: ", err)
    await client.query('ROLLBACK')
    return {success: false}
  }
  finally{
    return {success: true}
    client.release(); 
  }
}


export default signupRepository;




