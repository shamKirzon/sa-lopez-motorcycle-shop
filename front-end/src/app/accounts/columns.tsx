
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Account = {
  username: string
  password: string
  role: "admin" | "user"
}

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "username",
    header: "Username"
  }, 
  {
    accessorKey: "password", 
    header: "Password"
  }, 
  {
    accessorKey: "role", 
    header: "Role"
  }
]



// BASIC TABLE/ NO. 1 