
import { useToast, toast } from "@/hooks/use-toast";

// Configure toast with default settings
const defaultToast = (props: any) => toast({
  ...props,
  className: "bg-black text-white border-none shadow-lg",
  duration: 5000,
});

export { useToast, toast, defaultToast };
