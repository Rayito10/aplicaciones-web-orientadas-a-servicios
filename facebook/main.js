const selectUser = document.getElementById("select-user")
const muroDiv = document.getElementById("muro")
const avatarImg = document.getElementById("avatar-img")
const nombreHeader = document.getElementById("username")

//Cargamos los usuarios en el Select
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(datos=>
    {
        datos.forEach(usuario => {
            const opcion = '<option value= "'+usuario.id+'">'+usuario.name + '</option>'
            selectUser.innerHTML += opcion
        })
    }
)

const cargarMuro = ()=>
{
    const userId = selectUser.value
    const nombre = selectUser.options[selectUser.selectedIndex].text

    nombreHeader.innerText = nombre
    avatarImg.src="https://api.dicebear.com/9.x/adventurer/svg?seed="+userId
    avatarImg.style.display="block"

    //Cargamos el muro
    fetch("https://jsonplaceholder.typicode.com/users/"+userId+"/posts/")
    .then(response => response.json())
    .then(posts => {

        muroDiv.innerHTML=""

        posts.forEach
        (
        post=>
        {
            muroDiv.innerHTML+= 
            '<div class="post">'+
                '<div class="post-title">'+post.title+'</div>'
            +'</div>'
        }
        )

    })
}