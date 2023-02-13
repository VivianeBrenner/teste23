import { useState } from 'react'

export default function Usuario() {

    const [usuario, setUsuario] = useState("catanacomics");
    const [urlFoto, setUrlFoto] = useState("assets/img/catanacomics.svg")

    function mudarUsuario() {

        const novoUsuario = prompt("Digite o nome do novo usuário")

        if (novoUsuario) {
            setUsuario(novoUsuario)
        }

    }

    function mudarUrlFoto() {

        const novaUrlFoto = prompt("Digite a URL da nova foto")

        if (novaUrlFoto) {
            setUrlFoto(novaUrlFoto)
        }

    }

    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={mudarUrlFoto} src={urlFoto} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{usuario}</strong>
                    <ion-icon onClick={mudarUsuario} data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}