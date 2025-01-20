import { Input } from "@/components/ui/input"


const Users = () => {
  return (
    <div>
      <div className="h-[30rem] w-[70rem] bg-zinc-400 rounded-[1rem] pt-[1rem]">
        <Input className=" w-[30rem] bg-white ml-[2rem] "
                placeholder="Search"
        />
      </div>
    </div>
  )
}

export default Users
