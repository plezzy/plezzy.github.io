const $formulario = document.getElementById("form-container")
const $inputs = document.querySelectorAll('.form__input')
const expresiones = 
{
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



const inputValues = 
{
    name: false,
    email: false,
    subject: false,
    message: false
}

const validarSinExP = (input, type) =>
    {
        if(input.value == "")
        {
            inputValues[type] = false
            document.querySelector(`#form__item-${type} p`).classList.add("form__input-error--actived")
        
        }
        else
        {
            inputValues[type] = true  
            document.querySelector(`#form__item-${type} p`).classList.remove("form__input-error--actived") 
        }
    }


const validarCampo = (input, expresion, type) =>
    {
        if(input.value == "")
            {
                // ESTILOS INPUT
                document.getElementById(`form__item-${type}`).classList.remove("form__item--incorrect")
    
                document.getElementById(`form__item-${type}`).classList.remove("form__item--correct")
                // MENSAJE
                document.querySelector(`#form__item-${type} p`).classList.remove("form__input-error--actived")
                inputValues[type] = false
            }
            else if(expresion.test(input.value))
            {
                // ESTILOS INPUT
                document.getElementById(`form__item-${type}`).classList.remove("form__item--incorrect")
    
                document.getElementById(`form__item-${type}`).classList.add("form__item--correct")
                document.querySelector(`#form__item-${type} p`).classList.remove("form__input-error--actived")
                document.querySelector(`#form__item-${type} i`).classList.remove("fa-circle-xmark")
                document.querySelector(`#form__item-${type} i`).classList.add("fa-circle-check")
                // MENSAJE
                inputValues[type] = true
            }
            else
            {
                // ESTILOS INPUT
                document.getElementById(`form__item-${type}`).classList.remove("form__item--correct")
                document.getElementById(`form__item-${type}`).classList.add("form__item--incorrect")
                document.querySelector(`#form__item-${type} p`).classList.add("form__input-error--actived")
                document.querySelector(`#form__item-${type} i`).classList.remove("fa-circle-check")
                document.querySelector(`#form__item-${type} i`).classList.add("fa-circle-xmark")
                // MENSAJE
                inputValues[type] = false
            }
    }
    
const validarData = (e) =>
    {
        document.getElementById("form__advertisement").classList.remove("form__advertisement--actived")
        document.querySelector(".form__sent").classList.remove("form__sent--actived")

        switch(e.target.name)
        {
            case "name":
    
                validarCampo(e.target, expresiones.nombre, 'name')
    
                break;
    
            case "email":
    
                validarCampo(e.target, expresiones.correo, 'email')
    
                break;
            
            case "subject":
    
                validarSinExP(e.target, 'subject')
    
                break;

            case "message":
        
                validarSinExP(e.target, 'message')
    
                break;
                
        }
    }
    
$formulario.addEventListener('submit', (e) =>
{
    // e.preventDefault()

    if(inputValues.name && inputValues.email && inputValues.subject && inputValues.message)
    {
        document.getElementById("form__advertisement").classList.remove("form__advertisement--actived")
        document.getElementById(`form__item-name`).classList.remove("form__item--correct")
        document.getElementById(`form__item-email`).classList.remove("form__item--correct")

        document.querySelector(".form__sent").classList.add("form__sent--actived")
        $formulario.reset()
        
        setTimeout(() => {
            document.querySelector(".form__sent").classList.remove("form__sent--actived")
        }, 5000);
    }
    else
    {
        console.log("no se envio")
        document.getElementById("form__advertisement").classList.add("form__advertisement--actived")

    }
})

$inputs.forEach((input) => 
{
    input.addEventListener('keyup', validarData)
    input.addEventListener('blur', validarData)
})