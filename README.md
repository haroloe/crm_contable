# CRM Contable Peruano (Next.js)

Stack: **Next.js 14 + MySQL + Prisma + Auth.js + Tailwind**.

## Funcionalidades incluidas
- Login por roles: **ADMIN, CONTADOR, ASISTENTE, COBRANZAS**.
- Módulos: clientes, servicios, pagos, obligaciones y declaraciones.
- Dashboard ejecutivo con KPIs: clientes activos, pagos pendientes, vencimientos y deuda total.
- Arquitectura **Event Driven Design** con tabla `Event` para auditoría/integraciones.

## Despliegue en Hostinger
1. Crear base de datos MySQL en hPanel.
2. Copiar `.env.example` a `.env` y completar credenciales.
3. Instalar dependencias y compilar:
   ```bash
   npm install
   npx prisma generate
   npx prisma migrate deploy
   npm run build
   ```
4. Ejecutar con PM2 o Node:
   ```bash
   npm run start
   ```

## Desarrollo local
```bash
npm install
npm run dev
```


## Conexión MySQL configurada
- Host: `srv1851.hstgr.io`
- Puerto: `3306`
- Base de datos: `u481382477_crm_contable`
- Usuario: `u481382477_Contadora`

> La contraseña se configuró en `.env`/`.env.example` para facilitar el arranque.
