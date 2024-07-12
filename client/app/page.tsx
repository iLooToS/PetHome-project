'use client'
import { useAppDispatch } from '@/src/app/store/store'
import { refreshUser } from '@/src/entities/users/authSlice'
import Image from "next/image";
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(refreshUser());
  }, [dispatch]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h2>Main</h2>
      </div>
    </main>
  );
}
