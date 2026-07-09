import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { businessCardSchema, BusinessCardFormValues } from '@/lib/validations';
import { DEFAULT_CARD_DATA } from '@/data/default-card';

export function useBusinessCard(): UseFormReturn<BusinessCardFormValues> {
  const form = useForm<BusinessCardFormValues>({
    resolver: zodResolver(businessCardSchema),
    defaultValues: DEFAULT_CARD_DATA,
    mode: 'onChange',
  });

  return form;
}
