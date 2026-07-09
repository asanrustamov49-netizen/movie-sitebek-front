"use client";
import Edit from "@/components/pages/edit/Edit";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();
  console.log(id);
  return <Edit />;
};

export default page;
