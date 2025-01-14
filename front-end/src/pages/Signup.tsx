import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useToast } from "@/hooks/use-toast";
import { title } from "process";
import { ToastAction } from "@radix-ui/react-toast";

const formSchema = z
  .object({
    fullName: z
      .string()
      .min(5, { message: "Full name must be atleast 5 characters" })
      .max(25, { message: "Full name can have a maximum of 25 characters" }),
    address: z
      .string()
      .min(5, { message: "Address must be atleast 5 characters" }),
    phoneNumber: z
      .string()
      .regex(/^\d{11}$/, { message: "Phone number must be 11 digits " }),
    emailAddress: z.string().email({ message: "invalid email address" }),
    username: z
      .string()
      .min(3, { message: "Username must be atleast 3 characters" }),
    password: z
      .string()
      .min(7, { message: "Password must be atleast 7 characters" })
      .max(20, { message: "Password can have a maximum of 20 characters" }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

const Signup = () => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      phoneNumber: "",
      emailAddress: "",
      username: "",
      password: "",
    },
  });

  function handleSubmit() {
    toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })

  }
    return (
      <>
        {/* main container of my form  */}
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="h-[40rem] w-[50rem] bg-zinc-300 rounded-[1rem] overflow-y-auto shadow-lg">
            {/* form's header */}
            <div className="bg-black h-[7rem] w-full">hello</div>
            <div className="pt-[3rem] pl-[3rem] pr-[3rem]">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className=" space-y-2   p-4  "
                >
                  {/* fullName */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[18px]">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Enter your full name "
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  ></FormField>

                  {/* address */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[18px]">Address</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white "
                            placeholder="Enter your current address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  {/* phoneNumber */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[18px]">
                          Mobile Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="09000000000"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          {" "}
                          this is your form description
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  {/* emailAddress */}
                  <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[18px]">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="JuanDelaCruz@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  {/* username */}
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[18px]">Username</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Enter your Username"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  {/* password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[18px]">Password</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            type="password"
                            placeholder="Enter your Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  {/* confirm your password */}
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[18px]">
                          Confirm Your Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            type="password"
                            placeholder="Confirm your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Signup;
