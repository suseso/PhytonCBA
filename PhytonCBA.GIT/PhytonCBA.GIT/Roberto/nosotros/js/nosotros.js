/*Nosotros.js reemplaza todo el contenido del id: nosotros en 
el html nosotros.html.
Carga una variable con lo que será reemplazado y luego recupera
el elemento con getelementById, utilizando el id: nosotros -ver en
el html- y lo reemplaza por el contenido de la variable con innerHTML.
*/
let nos=`
<h1>Aqui pruebo escribir algo desde el js</h1>
<nav>
<ul>
    <li>
        <img src="img/Damian.JPG" alt="" height="300px" width="250">
        <img src="img/yo.png" alt="" height="300px" width="250">
    </li>
</ul>
</nav>
`

document.getElementById("nosotros").innerHTML=nos;
