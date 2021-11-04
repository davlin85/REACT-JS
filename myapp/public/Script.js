function validMinValue(value) {
    const regEx = /^.{2,}$/;
    if(!regEx.test(value))
        return false

    return true
}

function validEmail(value) {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regEx.test(value))
        return false

    return true
}

function onSubmit(e) {
    e.preventDefault()
}

function checkValidForm(elements) {
    var error = false
    elements.forEach(element => {
        if(element.value === "")
            error = true
        })
        if(error)
            document.getElementById("contactForm-submit").disabled = true
        else
            document.getElementById("contactForm-submit").disabled = false
}

var forms = document.querySelectorAll('.needs-validation')
checkValidForm(forms)


forms.forEach(element => {
    switch(element.id) {
        case "contactForm-firstName":
        case "contactForm-lastName":
            element.addEventListener('keyup', function (e) {
                if(!validMinValue(e.target.value)){ 
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-email":
            element.addEventListener('keyup', function (e) {
                if(!validEmail(e.target.value)) {
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

    }
})