import { test, expect, request, APIRequestContext } from '@playwright/test'

// Alta de una persona en la DB:

 // Definir los tipos de datos:
    interface Persona {
        nombre: String;
        apellido: String;
        edad: Number;
        pais: String
    }

test('Alta de una persona en la DB', async ({}) => {

  // contexto de trabajo independiente de un navegador 
    // check de tipo de datos Api Context.-
    const apiContext: APIRequestContext = await request.newContext()
    // Datos de la persona a dar de alta
    const nuevaPersona: Persona= {
        nombre : "Juan",
        apellido : "Otero",
        edad: 39,
        pais: "Colombia",
    }
   // Enviar la petición POST 
    const response = 
        await apiContext.post('https://cursotesting.com.ar:3000/personas/nueva/', {
                data: nuevaPersona
        })
        // aserción del código de respuesta
    expect(response.status()).toBe(200)
    const responseBody : string = await response.text()
    console.log("Mensaje obtenido: " + responseBody)

})


