const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())        // ← permite peticiones desde el navegador
app.use(express.json()) // ← permite leer JSON del body

app.post('/chat', async function(peticion, respuesta) {
  // 1. Leer el historial que envía el navegador → peticion.body.historial
  // 2. Hacer fetch a la API de Claude con ese historial
    
    try {
        const claudeRespuesta = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "TU_API_KEY",
                "anthropic-version": "2023-06-01",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1024,
                messages: peticion.body.historial  // ← array con el historial de mensajes
            })
            
        })
        // 3. Devolver la respuesta al navegador
        const datos = await claudeRespuesta.json()
        console.log(datos)
        respuesta.json({ texto: datos.content[0].text})
        
    } catch (error) {
        respuesta.status(500).json({error: 'Algo ha ido mal'})
    }
    
    
})

app.listen(3000, function() {
  console.log('Servidor corriendo en http://localhost:3000')
})

