'use client'

import { useState } from "react"
import UpdatePage from "@/components/UpdatePage"
import CheckPassword from "@/components/CheckPassword"


function Update() {

  const [check, setCheck] = useState(false)
  return !check ?<CheckPassword setCheck={setCheck}/>:<UpdatePage/>
}

export default Update
