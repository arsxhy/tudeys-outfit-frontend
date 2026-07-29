import React, { Suspense } from "react";
import AccountSettingsContent from "./AccountSettingsContent";

export default function AccountSettingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-charcoal-black"></div>}>
      <AccountSettingsContent />
    </Suspense>
  );
}
