# Cypress Mastersoft 🚀

Automatización UI con Cypress para el proyecto Mastersoft

Este repositorio contiene el conjunto de pruebas automatizadas desarrolladas con Cypress para validar el flujo de login y formularios del sistema PortalActoresWeb.

---

## 📁 Estructura del proyecto

```
cypress-mastersoft/
├── cypress/
│   ├── e2e/
│   │   └── login.feature         # Casos de prueba escritos en Gherkin
│   ├── support/
│   │   └── commands.js           # Comandos personalizados de Cypress
│   └── integration/
│       └── login.js              # Lógica de implementación de los pasos
├── node_modules/
├── cypress.config.js             # Configuración de Cypress
├── package.json
└── README.md
```

---

## 🧪 Tecnologías utilizadas

- Cypress 12+
- Cucumber preprocessor
- Azure DevOps (para CI/CD)
- GitHub (repositorio remoto)
- Postman (tests API)
- ZAP Proxy (OWASP testing)

---

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Cain46/cypress-mastersoft.git
cd cypress-mastersoft
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar pruebas:
```bash
npx cypress open
```

---

## ✅ Casos cubiertos

- Verificación visual de login
- Validación de campos obligatorios
- Formato de CUIT / CUIL
- Recordar usuario (localStorage)
- Enlaces de "Olvidé mi contraseña" y "Soy nuevo"
- Validación de tokens vía API con Postman
- Escaneo de vulnerabilidades con ZAP Proxy

---

## 🔄 Integración continua

La integración de pruebas en Azure DevOps se realiza a través de un pipeline que ejecuta los tests cada vez que se realiza un `push` al repositorio.

### Pasos principales:

1. Subir proyecto a GitHub
2. Conectar GitHub con Azure DevOps
3. Crear pipeline
4. Ejecutar tests en máquina virtual con Node y navegador

---

## 📦 En desarrollo

- Repositorios adicionales para Postman y ZAP
- Validaciones más profundas sobre sesiones, cookies y performance
- Documentación detallada por tipo de prueba: UX, VT, FN, NG

---

## ✨ Autor

Proyecto mantenido por Cain46
