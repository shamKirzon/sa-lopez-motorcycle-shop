import { Account, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Account[]> {
  // Fetch data from your API here.
  return [
    {
      username: "shammysuyat@gmail.com", 
      password: "password", 
      role: "user"
    },
    
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
