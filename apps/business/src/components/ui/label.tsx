import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-6",
        className
      )}
      {...props}
    />
  )
);
Label.displayName = "Label";
