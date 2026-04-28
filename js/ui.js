const chat = document.querySelector('#chat')

export function mostrarMensajeUsuario(pregunta) {
    const nuevoDiv = document.createElement('div')
    nuevoDiv.textContent = `Tú: ${pregunta}`
    chat.appendChild(nuevoDiv) 
}
export function mostrarMensajeBot(respuesta) {
    const nuevoDiv = document.createElement('div')
    nuevoDiv.textContent = `Bot: ${respuesta}`
    chat.appendChild(nuevoDiv)
  }









