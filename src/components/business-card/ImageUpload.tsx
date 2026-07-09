import { UseFormReturn } from "react-hook-form";
import { BusinessCardFormValues } from "@/lib/validations";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

export function ImageUpload({ form }: { form: UseFormReturn<BusinessCardFormValues> }) {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        form.setValue("image", reader.result as string, { shouldValidate: true });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="image"
        render={() => (
          <FormItem>
            <FormLabel>Profile Image</FormLabel>
            <FormControl>
              <Input 
                type="file" 
                accept="image/png, image/jpeg, image/webp" 
                onChange={handleImageChange}
              />
            </FormControl>
            <FormDescription>
              Upload a profile picture. Supports JPG, PNG, and WebP.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
