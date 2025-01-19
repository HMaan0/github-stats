"use client";

import dynamic from "next/dynamic";
import Card from "@/components/Card/Card";
import Header from "@/components/Header";
import LoginDialog from "@/components/LoginDialog";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";

// Dynamically import server components
const GithubAvatar = dynamic(() => import("@/components/Card/GithubAvatar"), {
  ssr: false,
  loading: () => (
    <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
  ),
});

const GithubGraph = dynamic(
  () => import("@/components/Card/githubGraph/GithubGraph"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-32 bg-gray-200 rounded animate-pulse" />
    ),
  }
);

export default function Home() {
  const users = ["brarkaran2004", "Dnicholson1966"];

  return (
    <main className="xl:mx-40 md:mx-[90px] md:my-[24px] m-4 flex flex-col gap-10">
      <LoginDialog />
      <Navbar />
      <Header />
      <section className="flex flex-col gap-10 md:px-14 xl:px-36">
        {users.map((user, index) => (
          <React.Fragment key={index}>
            <Card
              user={user}
              index={index}
              avatarComponent={
                <Suspense
                  fallback={
                    <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
                  }
                >
                  <GithubAvatar user={user} />
                </Suspense>
              }
            >
              <Suspense
                fallback={
                  <div className="w-full h-32 bg-gray-200 rounded animate-pulse" />
                }
              >
                <GithubGraph user={user} />
              </Suspense>
            </Card>
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}
