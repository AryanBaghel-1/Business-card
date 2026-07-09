import { z } from "zod";

export const businessCardSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  designation: z.string().min(2, "Designation is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  location: z.string().min(2, "Location is required"),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  bio: z.string().max(160, "Bio must be less than 160 characters").optional(),
  image: z.string().optional(),
  template: z.number().int().min(1).max(3),
});

export type BusinessCardFormValues = z.infer<typeof businessCardSchema>;
