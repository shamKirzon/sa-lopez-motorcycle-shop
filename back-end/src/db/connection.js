import pkg from 'pg'
const {Pool} = pkg; 

const pool = new Pool({
    user: "postgres", 
    host: "localhost", 
    database: "sa_lopez_motorcycle_shop", 
    password: "ymmahs13", 
    port: 5432
}); 

export default pool; 