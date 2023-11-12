import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Registertyles } from "./styles";

const Regsiters: React.FC = () => {

  const [registermodal, setRegisterModal] = useState<boolean>(false)
  const [loginmodal, setLoginModal] = useState<boolean>(false)
  const [username, setUsername] = useState<boolean>(false)
  const [profile, setProfile] = useState<boolean>(false)

  const [tab, setTab] = useState(0)

  return (
    <Registertyles style={{ overflow: "hidden" }}>

    </Registertyles>
  )
}



export default Regsiters