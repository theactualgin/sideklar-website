"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-lg px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Vi bruker informasjonskapsler for å forbedre opplevelsen din.{" "}
          <span className="text-[#0F0F0F] font-medium">Godtar du dette?</span>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-sm px-4 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
          >
            Avslå
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 rounded-xl bg-[#3ADBA1] text-[#0F0F0F] font-medium hover:bg-[#2bc990] transition-colors"
          >
            Godta
          </button>
        </div>
      </div>
    </div>
  );
}
