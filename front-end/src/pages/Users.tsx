import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";



const Users = () => {

  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const fetchUsers = async() =>{
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST", 
        headers: {
          "ContentType": "application/json"

        }
        
      })


    }

    fetchUsers(); 
  }, []);

  return (
    <div>
      <div className="h-[30rem] w-[70rem] bg-zinc-400 rounded-[1rem] pt-[1rem] space-y-8 pl-[1rem]">
        <Input
          className=" w-[30rem] bg-white ml-[2rem] "
          placeholder="Search"
        />

        {/* displaying users accounts - CONTAINER  */}
        <div>
          <div className="bg-zinc-200 w-[50rem] h-[5rem] flex items-center pl-[2rem] ml-[2rem] rounded-[10px]">
            <img
              
              alt="picture ni joysi"
              className="radius-[50px]  w-[3rem] h-[3rem] rounded-full object-cover"
            />
            <label className="ml-[2rem]">SUYAT, SHAMMY KIERSON </label>

            {/* buttons */}
            <div className="ml-auto pr-[2rem] items-center justify-center flex space-x-3 ">
              <Button>edit</Button>
              <Button>delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
