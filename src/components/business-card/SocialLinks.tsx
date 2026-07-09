import { UseFormReturn } from "react-hook-form";
import { BusinessCardFormValues } from "@/lib/validations";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Instagram } from "@/components/ui/icons";

export function SocialLinks({ form }: { form: UseFormReturn<BusinessCardFormValues> }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </FormLabel>
            <FormControl>
              <Input placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </FormLabel>
            <FormControl>
              <Input placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="twitter"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Twitter className="w-4 h-4" /> Twitter/X
            </FormLabel>
            <FormControl>
              <Input placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="instagram"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </FormLabel>
            <FormControl>
              <Input placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
