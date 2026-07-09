import { UseFormReturn } from "react-hook-form";
import { BusinessCardFormValues } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfo } from "./PersonalInfo";
import { SocialLinks } from "./SocialLinks";
import { ImageUpload } from "./ImageUpload";
import { TemplateSelector } from "./TemplateSelector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function BusinessForm({ form }: { form: UseFormReturn<BusinessCardFormValues> }) {
  return (
    <Card className="w-full h-full border-0 shadow-none bg-transparent">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold">Card Details</CardTitle>
        <CardDescription className="text-base">
          Fill in your details to generate your digital business card.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8">
            <TemplateSelector form={form} />
            
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-xl">
                <TabsTrigger value="personal" className="rounded-lg data-[state=active]:shadow-sm">Personal</TabsTrigger>
                <TabsTrigger value="social" className="rounded-lg data-[state=active]:shadow-sm">Socials</TabsTrigger>
                <TabsTrigger value="image" className="rounded-lg data-[state=active]:shadow-sm">Image</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="mt-0 space-y-4 focus-visible:outline-none focus-visible:ring-0">
                <PersonalInfo form={form} />
              </TabsContent>
              
              <TabsContent value="social" className="mt-0 space-y-4 focus-visible:outline-none focus-visible:ring-0">
                <SocialLinks form={form} />
              </TabsContent>
              
              <TabsContent value="image" className="mt-0 space-y-4 focus-visible:outline-none focus-visible:ring-0">
                <ImageUpload form={form} />
              </TabsContent>
            </Tabs>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
