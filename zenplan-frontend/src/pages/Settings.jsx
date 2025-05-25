import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthContext } from "@/hooks/useAuthContext";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AlertBox from "@/components/alert_box/AlertBox";

const Settings = () => {
  const { user } = useAuthContext();

  const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
    },
  });

  const passwordSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters long"),
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  });

  const formPassword = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  const onSubmitPassword = async (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 px-4 py-6 max-w-6xl mx-auto w-full">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-neutral-800">
            Profile & Statistics
          </h1>
          <p className="text-neutral-500">
            Manage your account and view your wellness progress
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Account Settings
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className={"gap-4 flex flex-col"}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Name"
                            {...field}
                            className={"text-black"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Email"
                            {...field}
                            className={"text-black"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <AlertBox
                    btnName={"Update Profile"}
                    title={"Are you sure you want to update?"}
                    onClick={form.handleSubmit(onSubmit)}
                    css={
                      "bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] flex"
                    }
                  />
                </form>
              </Form>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Change Password
              </h2>
              <Form {...formPassword}>
                <form
                  onSubmit={formPassword.handleSubmit(onSubmitPassword)}
                  className={"gap-4 flex flex-col"}
                >
                  <FormField
                    control={formPassword.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                          <Input
                            type={"password"}
                            placeholder="Current Password"
                            {...field}
                            className={"text-black"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={formPassword.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input
                            type={"password"}
                            placeholder="New Password"
                            {...field}
                            className={"text-black"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formPassword.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type={"password"}
                            placeholder="Confirm Password"
                            {...field}
                            className={"text-black"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <AlertBox
                    btnName={"Update Password"}
                    title={"Are you sure you want to update your password?"}
                    onClick={formPassword.handleSubmit(onSubmitPassword)}
                    css={
                      "bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] flex"
                    }
                  />
                </form>
              </Form>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Account Actions
              </h2>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium text-neutral-800 mb-4">
              Activity Statistics
            </h2>

            {/* <StatisticsCards stats={stats} />
            <CategoryProgress stats={stats} /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
