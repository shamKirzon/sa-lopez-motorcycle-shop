import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import joyce from "@/assets/joyce.jpg";
import {
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem } from "./dropdown-menu";
import { useState } from "react";
import { Button } from "./button";
import { set } from "date-fns";

const items = [
  {
    title: "Dashboard",
    url: "/admin-dashboard/content",
    icon: Home,
  },
  {
    title: "Users",
    url: "/admin-dashboard/users",
    icon: Inbox,
  },
  {
    title: "Inventory",
    url: "/admin-dashboard/inventory",
    icon: Calendar,
  },
];

export function AppSidebar() {
  const {toast} = useToast(); 
  const navigate = useNavigate();
  const currentUser = "Aso Po Ako";
  const [showDialog, setShowDialog] = useState(false);

  function handleShowDialog() {
    setShowDialog(true);
  }

  function handleLogout() {
    toast({
      description: "You have successfully logged out",
      variant: "default", 
    })
    navigate("/login")
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>S.A Motorcycle Shop</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-[5rem]">
                  {/* picture of the user */}
                  <img
                    src={joyce}
                    alt="picture ni joysi"
                    className="radius-[50px]  w-[3rem] h-[3rem] rounded-full object-cover"
                  />

                  {currentUser}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleShowDialog}>
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure you want to log out?</DialogTitle>
              <DialogDescription>
                Logging out will end your current session.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-end justify-end space-x-2">
              <Button
                onClick={() => {
                  setShowDialog(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </Dialog>
    </Sidebar>
  );
}
