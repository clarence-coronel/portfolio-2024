"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const { id } = params; // Get the dynamic route parameter 'id'

  return <div>Project No: {id}</div>;
};

export default Page;
