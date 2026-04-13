import type { ContactFormData, NewsletterData } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSubmitContact() {
  return useMutation<void, Error, ContactFormData>({
    mutationFn: async (data: ContactFormData) => {
      // Simulate API call — replace with real backend call when available
      await new Promise((r) => setTimeout(r, 1200));
      console.log("Contact form submitted:", data);
    },
  });
}

export function useSubscribeNewsletter() {
  return useMutation<void, Error, NewsletterData>({
    mutationFn: async (data: NewsletterData) => {
      // Simulate API call — replace with real backend call when available
      await new Promise((r) => setTimeout(r, 800));
      console.log("Newsletter subscription:", data);
    },
  });
}
