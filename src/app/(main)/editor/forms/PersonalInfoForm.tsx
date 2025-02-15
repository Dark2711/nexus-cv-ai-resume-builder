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
import { personalInfoSchema, PersonalInfoValue } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function PersonalInfoForm() {
  const form = useForm<PersonalInfoValue>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      photo: undefined,
      firstName: "",
      lastName: "",
      jobTitle: "",
      city: "",
      country: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async () => {
      const isValid = await form.trigger();
      if (!isValid) return;
      // Update resume data
    });
    return unsubscribe;
  }, [form]);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Personal Info</h2>
        <p className="text-sm text-muted-foreground">Tell us about yourself</p>
      </div>
      <Form {...form}>
        <form className="space-y-3"></form>
        <FormField
          control={form.control}
          name="photo"
          render={({ field: { value, ...fieldValue } }) => (
            <FormItem>
              <FormLabel>Your Photo</FormLabel>
              <FormControl>
                <Input
                  {...fieldValue}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    fieldValue.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your first name" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your last name" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter job title" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your city" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your Country" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your email" type="email" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
}
