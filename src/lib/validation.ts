import { title } from "process";
import z from "zod";

export const optionalString = z.string().optional().or(z.literal(""));

export const generralInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GeneralInfoValue = z.infer<typeof generralInfoSchema>;

export const personalInfoSchema = z.object({
  photo: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Must be an image file",
    )
    .refine(
      (file) => !file || file.size <= 1024 * 1024 * 4,
      "File Must be less than 4MB",
    ),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  email: optionalString,
  phone: optionalString,
  //   website: optionalString,
  //   linkedin: optionalString,
  //   github: optionalString,
  //   twitter: optionalString,
});

export type PersonalInfoValue = z.infer<typeof personalInfoSchema>;
