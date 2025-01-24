import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <p>Yuvraj Bhalla</p>
      <Link className="underline" href="https://github.com/its-yuvi-bhalla">
        https://github.com/its-yuvi-bhalla
      </Link>
    </div>
  );
};

export default StudentInfo;
