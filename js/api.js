export async function resolverDudas(historial) {
    
    try {
        const respuesta = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1024,
                messages: historial  // ← array con el historial de mensajes
            })
        })
        const datos = await respuesta.json()
        console.log(datos)
        return datos.content[0].text
        
    } catch (error) {
        console.log('Error:', error)
        return null
    }
    
    
}