"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function Home() {

  const testDB = async () => {
    const { data, error } = await supabase
      .from("mensagens") // nome da tua tabela
      .select("*")

    console.log("DATA:", data)
    console.log("ERROR:", error)
  }

  useEffect(() => {
    testDB()
  }, [])

  return (
    <div>
      <h1>Supabase ligado 🔥</h1>
    </div>
  )
}