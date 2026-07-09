import { UseFormReturn } from "react-hook-form";
import { BusinessCardFormValues } from "@/lib/validations";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TEMPLATES } from "@/constants/templates";

export function TemplateSelector({ form }: { form: UseFormReturn<BusinessCardFormValues> }) {
  return (
    <FormField
      control={form.control}
      name="template"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Choose a Template</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={(value) => field.onChange(parseInt(value, 10))}
              value={field.value ? field.value.toString() : undefined}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {TEMPLATES.map((template) => (
                <FormItem key={template.id}>
                  <FormControl>
                    <RadioGroupItem value={template.id.toString()} className="peer sr-only" />
                  </FormControl>
                  <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer text-center">
                    <span className="font-semibold mb-2">{template.name}</span>
                    <span className="text-xs text-muted-foreground">{template.description}</span>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
