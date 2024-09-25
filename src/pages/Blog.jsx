import RootLayout from "@/app/layout";
import React from "react";
import Head from "next/head";

const Blog = () => {
  return (
//className={`flex justify-center items-center text-center h-screen  mt-9 `}
    <RootLayout>
      <Head>Blog</Head>
      <div>
        <h1 className="text-2xl">Espacio para mis publicaciones</h1>
      </div>
    </RootLayout>
       
  );
};

export default Blog;
