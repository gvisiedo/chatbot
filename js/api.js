export async function resolverDudas(historial) {
    
    try {
        const claudeRespuesta = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                historial: historial  // ← array con el historial de mensajes
            })
        })
        const datos = await claudeRespuesta.json()
        console.log(datos)
        return datos.texto
        
    } catch (error) {
        console.log('Error:', error)
        return null
    }
    
    
}