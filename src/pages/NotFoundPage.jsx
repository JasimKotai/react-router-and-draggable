import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2 p-5" >
      <h1 className="text-2xl text-stone-600">404 Not Found</h1>
      <Link to="/" className="text-2xl text-black">Home</Link>
    </div>
  );
}

export default NotFoundPage;
