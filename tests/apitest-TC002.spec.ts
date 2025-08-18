import { test, expect, request } from '@playwright/test'

test('Api Pido Token', async ({ page }) => {

    // Definir los tipos de datos:
    interface Claves {
      username: String;
      password: String
    }

    // contexto de valores de la pagina ( cookie, valor guardado )
    const contexto = page.context()
    // solicitud a una api
    const request = contexto.request
    // los datos de envío de la clave para recibir el token
    const pidotoken: Claves = {
        username: "institutoweb",
        password: "cursoperformance"
      }
// Consumir la Api y recibir una respuesta
const response = 
        await request.post('https://cursotesting.com.ar:3000/token',
                    { data: JSON.stringify(pidotoken),
                        headers : {'Content-Type':'application/json'}
                    }
)

const respuestaJson = await response.json()
const mitoken: String = respuestaJson.token
console.log("Token Recibido: ",mitoken)
expect(mitoken).not.toBe(undefined)

})

