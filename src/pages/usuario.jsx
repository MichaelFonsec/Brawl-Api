import React from "react"
import Navbar from "../nav-bar"

import Rodape from "../rodape"
import Conteudo from "../conteudo-home"
import { useState } from "react"


function Usuario () {


    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuario: ${email} foi cadastrado com a senha ${password} `)
        console.log('Cadastrou Usuario!')
    
       
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
      <>
        <Navbar />
    <Conteudo>
        <div>
<h1>Meu Cadastro</h1>
<form onSubmit={cadastrarUsuario}>
<div>
    <label htmlFor="email"></label>
    <input type="text" id="email" name="email" placeholder="Digite seu nome"  onChange={(e) => setEmail(e.target.value)} />
</div>
<div>
    <input type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
</div>
<div>
<label htmlFor="password"></label>
    <input type="submit" id="password" name="password" value="Cadastrar"/>
</div>
</form>
</div>
  
</Conteudo>
  <Rodape />
</>
    )
}

export default Usuario
