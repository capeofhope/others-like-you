"use client";
import posthog from "posthog-js";

export default function Home() {
  function handlePurchase() {
    console.log("Hii")
    posthog.capture("purchase_completed", { amount: 99 });
  }

  return (
    <button className="" onClick={handlePurchase}>
      Complete purchase
    </button>
  );
}
