import pool from "../db/connection.js";

async function loginRepository(username, password) {
  const query = "SELECT * FROM accounts WHERE username = $1 AND password = $2 ";

  try {
    const values = [username, password];
    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      const role = result.rows[0].role;
      const account = result.rows[0];
      const userId = account.user_id;

      const getFullnameQuery = `SELECT fullname FROM users WHERE user_id = $1`;

      try {
        const getFullName = await pool.query(getFullnameQuery, [userId]);

        if (getFullName.rows.length > 0) {
          const fullname = getFullName.rows[0].fullname;
          return { success: true, fullname: fullname, role: role,  message: "Login Successfully"  };
        } else {
          console.log("failed in retrieving fullname ");
        }
      } catch (err) {
        console.error("error in retrieving full name from accounts: ", err);
      }
     
    } else {
      return { success: false, message: "there is no existing account in db" };
    }
  } catch (err) {
    console.error("Error executing query", err);
    throw new Error("Database query failed");
  }
}

export default loginRepository;


