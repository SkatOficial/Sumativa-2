const apiUrl = 'https://registros-skxn.onrender.com/api/registros';

async function getUsser(){
    try {
        const response = await fetch(apiUrl);
        const data =  await response.json();
        return data
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
};


export function registro(usser, pass) {
    const data = {
        usser: usser,
        pass: pass,
    };

    getUsser()
        .then(data => {
            console.log('SUCCES:', data);
            localStorage.setItem("sesionAbierta",JSON.stringify(true));
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}