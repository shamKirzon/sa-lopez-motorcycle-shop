import pool from "../db/connection.js";

async function loginRepository(username, password) {
  const query =
    "SELECT * FROM accounts WHERE username = $1 AND password = $2 ";

  try {
    const values = [username, password]; 
    const result = await pool.query(query, values); 

    if(result.rows.length > 0){
      return {success: true, message: "Login Successfully"}
    } else{
      return{success: false, message: "there is no existing account in db"}
    }

  } catch (err) {
    console.error("Error executing query", err);
    throw new Error("Database query failed");
  }
}

export default loginRepository;
