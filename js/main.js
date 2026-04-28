import { resolverDudas } from "./api.js";
import { mostrarMensajeUsuario, mostrarMensajeBot } from "./ui.js";

const btnPreguntar = document.querySelector('#inputBtn')
const chatInput = document.querySelector('#chatInput')
const chat = document.querySelector('#chat')
const historial = [] //donde guardamos mensajes

btnPreguntar.addEventListener('click',async function () {
    if(!chatInput.value){
        chat.textContent = 'Haz una pregunta'
        return
    }
    try {
  const pregunta = chatInput.value
  mostrarMensajeUsuario(pregunta)
  historial.push({ role: "user", content: pregunta })
  const respuesta = await resolverDudas(historial)
  mostrarMensajeBot(respuesta)
  historial.push({ role: "assistant", content: respuesta })
  chatInput.value = ""
        }catch (error) {
        chat.textContent = 'Algo no ha ido bien...' + error
    

    }
})
