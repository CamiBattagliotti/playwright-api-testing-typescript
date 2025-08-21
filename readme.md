# API Testing con Playwright & TypeScript

Proyecto de **testing automatizado de APIs** utilizando **Playwright** y **TypeScript**.  
Este repositorio contiene ejemplos prácticos para **consumir servicios REST API**, validar **Request / Response**, trabajar con **tokens de autenticación** y aplicar buenas prácticas de automatización.

---

## Funcionalidades cubiertas

- 🔐 **Autenticación con token**
  - Solicitud de token con credenciales válidas.
  - Manejo de error en solicitud de token con credenciales inválidas.
  - Validación de códigos de respuesta (`200 OK` y `401 Unauthorized`).
- **Operaciones sobre la base de datos vía API**
- Creación (alta) de un registro en la tabla `personas` mediante endpoint.
- **Buenas prácticas**
- Uso de **interfaces TypeScript** para tipado de datos.
- Uso de **APIRequestContext** para pruebas sin navegador.
- Validación con **`expect()`** siguiendo las recomendaciones de Playwright.
- Impresión de datos relevantes en consola para debugging.

---

## Casos de prueba incluidos

- **TC002:** Solicitud de token con credenciales válidas  
  ✔ Envía credenciales correctas al endpoint `/token`.  
  ✔ Verifica que el token recibido **no sea `undefined`**.  
  ✔ Valida código de estado **`200 OK`**.

- **TC003:** Solicitud de token con credenciales inválidas  
  ✔ Envía credenciales incorrectas al endpoint `/token`.  
  ✔ Verifica que el token recibido sea **`undefined`**.  
  ✔ Valida código de estado **`401 Unauthorized`**.

- **TC004:** Alta de una persona en la DB  
  ✔ Envía datos de una nueva persona al endpoint `/personas/nueva/`.  
  ✔ Valida código de estado **`200 OK`**.  
  ✔ Imprime el mensaje de respuesta en consola.

---

## Tecnologías utilizadas

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Swagger](https://swagger.io/) (para documentación y pruebas de APIs)

---

## ⚙️ Instalación y configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tuusuario/playwright-api-testing-typescript.git
   cd playwright-api-testing-typescript
   ```

````

Instalar dependencias:

```bash
npm install
````

Instalar navegadores de Playwright si fuera necesario:

```bash
npx playwright install
```

Ejecutar los tests:

```bash
npx playwright test
```

---

## Recursos de práctica

- 🌐 **Swagger API** → https://cursotesting.com.ar/swagger/
- 🗄️ **Base de datos de prueba (phpMyAdmin)**
  - URL: https://cursotesting.com.ar/phpmyadmin/
  - Usuario: `testing`
  - Clave: `cursoperformance`
  - Base de datos: `testing`
  - Tabla: `personas`

> **Nota:** Los datos anteriores son de práctica para el curso. No incluir credenciales sensibles de entornos reales en el repositorio.

---

## 🤝 Contribuciones

Este proyecto está abierto a mejoras. Siéntete libre de hacer **fork**, proponer cambios o compartir ideas.
