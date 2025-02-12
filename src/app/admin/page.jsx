"use client";
import React, { useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/appwrite/userApi";
import JobManage from "../components/admin/JobManage";

const Page = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      if (user && user.isAdmin) {
        setIsAdmin(true);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAdmin) {
    return (
      <>
        <h2>Access Denied</h2>
        <p>return to <a href="/" style={{"color":"blue"}}>home</a></p>
      </>
  );
  }

  return (
    <>
      <JobManage />
    </>
  );
};

export default Page;
