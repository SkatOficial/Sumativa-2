const apiUrl = 'https://registros-skxn.onrender.com/api/registros';

export const getUsser = async(usser) => {
    try {
        const response = await fetch(apiUrl);
        const data =  await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
};


export function registro(usser, name, pass) {
    const data = {
        usser: usser,
        pass: pass,
        name: name
    };


    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Maneja la respuesta exitosa aquí
    })
    .catch((error) => {
        console.error('Error:', error);
        // Maneja el error aquí
    });
}
