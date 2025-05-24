import React, { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // import styles
import { Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const category = [
  "Nutrition",
  "Selfcare",
  "Exercise",
  "Hobbies",
  "Stress Management",
  "Medical Checkups",
  "Hydration",
  "Health",
  "Emotional Wellness",
  "Social Wellness",
];

const ActivityModel = ({ mode, setOpen, value }) => {
  const formSchema = z.object({
    title: z.string().nonempty("Title cannot be empty"),
    category: z.enum(category, {
      errorMap: () => ({ message: "Please select a valid category" }),
    }),
    time: z
      .string()
      .nonempty("Time is required")
      .refine(
        (val) => {
          // Check if the value can be converted to a valid Date
          return !isNaN(Date.parse(val));
        },
        {
          message: "Invalid date and time",
        }
      ),
    description: z.string().optional(),
    note: z.string().optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      time: new Date().toISOString(),
      description: "",
      note: "",
    },
  });

  useEffect(() => {
    if (value) {
      form.reset({
        time: value.time,
      });
    }
  }, [value]);

  const onSubmit = (data) => {
    const test = new Date(data.time).toString();
    console.log(test);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter title"
                  {...field}
                  className={"text-black"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={"w-full text-black"}>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {category.map((cate, i) => (
                          <SelectItem value={cate} key={i}>
                            {cate}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="font-bold">
            Time
          </label>
          <div className="border p-2 rounded-md mt-1 text-black">
            <Controller
              control={form.control}
              name={"time"}
              render={({ field }) => {
                return (
                  <DatePicker
                    selected={new Date(field.value)}
                    onChange={(date) => field.onChange(date)}
                    showTimeSelect
                    timeFormat="HH:mm" // 24-hour format here
                    timeIntervals={15} // 15-minute steps
                    dateFormat="yyyy-MM-dd HH:mm"
                    placeholderText="Select date and time"
                    className="input" // add your custom styling or use shadcn Input styles
                  />
                );
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="description"
                    className={"text-black"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-4">
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="note"
                    className={"text-black"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <Button
            type="button"
            onClick={() => setOpen(false)}
            className={
              "bg-white hover:bg-[var(--color-primary)] hover:text-white text-black border border-gray-200 shadow-none"
            }
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            className={"bg-[var(--color-primary)] text-white hover:text-black"}
          >
            {mode === "edit" ? "Update" : "Add"} Activity
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ActivityModel;
