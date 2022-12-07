import PropTypes from 'prop-types';

export function Button({text, name = "Usuario"}){
    if (!text) {
        console.log("El texto es requerido")
    }
    return<button>
        {text} - {name}

    </button>
}

Button.prototype ={
    text: PropTypes.string.isRequired
}
