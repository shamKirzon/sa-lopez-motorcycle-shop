import z from "zod";
import { useEffect } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useNavigate } from "react-router-dom";

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
  // const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      phoneNumber: "",
      emailAddress: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    form.setValue("fullName", "Shammy Kierson Suyat");
    form.setValue("address", "Taguig City");
    form.setValue("phoneNumber", "12345678901");
    form.setValue("emailAddress", "shammysuyat@gmail.com");
    form.setValue("username", "Kirzon");
    form.setValue("password", "mypassword");
    form.setValue("confirmPassword", "mypassword")
  }, [form]);


  async function handleSubmit(values: z.infer<typeof formSchema>) {

    const userInformation = {
      personalDetails: {
        fullName: values.fullName,
        address: values.address,
        phoneNumber: values.phoneNumber,
        emailAddress: values.emailAddress,
      },
      accountDetails: {
        username: values.username,
        password: values.password,
      },
    };

    // welcome prompt
    toast({
      variant: "default",
      title: "Welcome!",
      description: `Hello, ${values.fullName.split(" ")[0]}. Your account has been created successfully!`,
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
  
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInformation)
      });

      const data = await response.json();

      if(!response.ok){
        console.log("response is not okay", data.message)
       
      }else{
        console.log("response is okay", data.message)
      }


    } catch (err) {
      console.error("There is a problem in connecting to  back-end - Signup(front-end) ");
    }

    // navigate("/user-page");
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
};

export default Signup;
