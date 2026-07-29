import React, { Suspense } from "react";
import PaymentMethodsContent from "./PaymentMethodsContent";

export default function PaymentMethodsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-charcoal-black"></div>}>
      <PaymentMethodsContent />
    </Suspense>
  );
}
