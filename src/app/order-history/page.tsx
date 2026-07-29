import React, { Suspense } from "react";
import OrderHistoryContent from "./OrderHistoryContent";

export default function OrderHistoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-charcoal-black"></div>}>
      <OrderHistoryContent />
    </Suspense>
  );
}
