APP

- Recibe: Token
- Muestra: header, imagen entrada, texto entrada, botones de login y registro
- Estado: logueado o no logueado
- Accion del usuario: clicar botón

REGISTRO

- Recibe: datos user
- Muestra: imagen perfil vector, texto registro, campo input primer nombre, ultimo nombre, imagen, email, password, confirmar password botones enviar y volver
- Estado: nada
- Accion del usuario: rellenar los datos y clickar el boton

LOGIN

- Recibe: datos user
- Muestra: imagen perfil vector, texto login, campo input email y password, botones enviar y volver
- Estado: nada
- Accion del usuario: rellenar los datos y clickar el boton

CABECERA

- Recibe: nada
- Muestra: logo, titulo y boton de logout (en todas paginas menos la main, login y registro)
- Estado: nada
- Accion del Usuario: nada

LISTADO DE QUEJAS

- Recibe: un array de QUEJAS, boton de filtrado por categoria, boton de filtrado por radio (NtH), boton de crear queja, boton de cargar más
- Muestra: header, card de quejas
- Estado: nada
- Accion del Usuario: filtrar, crear queja, borrar queja, agregar queja

CARD DE QUEJA

- Recibe: datos de la queja
- Muestra: imagen, datos de la queja, boton de agregar queja, boton de borrar queja
- Estado: nada
- Accion del Usuario: borrar queja, agregar queja, acceder a detalles de queja

BUTTON

- Recibe: accion
- Muestra: boton con un texto
- Estado: ninguno
- Accion del Usuario: clickar para hacer la funcion del boton

DETALLES QUEJAS

- Recibe: datos queja
- Muestra: mapa, informacion de la queja, boton editar, boton borrar, imágenes
- Estado: ninguno
- Accion del Usuario: editar, borrar, abrir imagenes (NtH)

CAPA DE DATOS

- user = {name, lastSurname, image, password, complaints}
- complaints = {category, title, description, adress, latitute, longitude, image, creationDate, complainedAmount}
