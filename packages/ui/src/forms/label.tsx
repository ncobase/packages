'use client';

import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@tone/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const labelVariants = cva(
  'leading-[0.875rem] peer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-500 hover:text-slate-500/75'
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
