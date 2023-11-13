// create account button 


const createAccount = document.querySelector(".loginbutton");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const token = '';

async function login(){
    try {
        console.log(email.value, password.value)
       const ax = await axios.post('http://localhost:5000/api/v1/user/userLogin',{
            email: email.value,
            password: password.value,
        }); 
        const message = ax.data.message;
        token = message.split('Token')[0]
        console.log(token)

    } catch (error) {
        if(error.response.status == 400){
            console.log(error.response.data.err)
        }
    }
}


createAccount.addEventListener("click",login)