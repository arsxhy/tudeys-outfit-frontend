import React, { Suspense } from "react";
import MyAddressesContent from "./MyAddressesContent";

export default function MyAddressesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-charcoal-black"></div>}>
      <MyAddressesContent />
    </Suspense>
  );
}
