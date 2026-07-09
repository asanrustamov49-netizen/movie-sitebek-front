"use client"
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface IChildrenProps {
  children: React.ReactNode;
}

const layout = ({ children }: IChildrenProps) => {
  const qc = new QueryClient();
  return (
    <QueryClientProvider client={qc}>
      <div className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default layout;
