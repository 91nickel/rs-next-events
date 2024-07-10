import React from 'react'
import { Header } from '@/layouts/header'

export const MainLayout = ({children}: { children: React.ReactNode }) => {
  return (
    <>
      <section className="mx-auto max-w-4xl">
        <Header/>
      </section>
      <section className="mx-auto max-w-4xl">
        {children}
      </section>
    </>
  )
}

