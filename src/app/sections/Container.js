"use client";

export default function Container({ children }) {
  return (
    <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
