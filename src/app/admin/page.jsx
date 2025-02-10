"use client";
import React, { useState, useEffect } from "react";
import { createJob, getJobsList, updateJob } from '../../lib/appwrite/adminApi';
import JobManage from '../components/admin/JobManage';
import JobApplications from '../components/admin/JobApplications';

const Page = () => {

  return (
    <>

    {/* <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", backgroundColor: "#f8f9fa", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}> */}
      <JobManage />
    {/* </div> */}
    </>
  );
};

export default Page;