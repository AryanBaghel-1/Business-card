import { UseFormReturn } from "react-hook-form";
import { BusinessCardFormValues } from "@/lib/validations";
import { TemplateOne } from "./templates/TemplateOne";
import { TemplateTwo } from "./templates/TemplateTwo";
import { TemplateThree } from "./templates/TemplateThree";

export function CardPreview({ form }: { form: UseFormReturn<BusinessCardFormValues> }) {
  const data = form.watch();

  const renderTemplate = () => {
    switch (data.template) {
      case 1:
        return <TemplateOne data={data} />;
      case 2:
        return <TemplateTwo data={data} />;
      case 3:
        return <TemplateThree data={data} />;
      default:
        return <TemplateOne data={data} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[450px] bg-muted/50 rounded-xl p-4 sm:p-8">
      <div className="scale-75 sm:scale-90 md:scale-100 transition-transform origin-top md:origin-center flex items-center justify-center">
        {renderTemplate()}
      </div>
    </div>
  );
}
