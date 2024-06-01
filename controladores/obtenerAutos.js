export const obtenerAutos = async() => {
    try {
        const response = await fetch('https://autos-rdbd.onrender.com/api/autos');
        const data =  await response.json();
        return data
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
};

export const obtenerAutosModelo = async(modelo) => {
    try{
        const response = await fetch(`https://autos-rdbd.onrender.com/api/autos/modelo/${modelo}`);
        const data = await response.json();
        return data;

    }catch(error){
        console.log(`El error es: ${error}`);
        return [];
    }
};

export const obtenerAutosMarca = async(marca) => {
    try{
        const response = await fetch(`https://autos-rdbd.onrender.com/api/autos/marca/${marca}`);
        const data = await response.json();
        return data;

    }catch(error){
        console.log(`El error es: ${error}`);
        return [];
    }
};

export const obtenerAutosBusqueda = async(valorBuscado) => {
    try{
        let autosEncontrados;
        //Obtiene autos por modelo
        let response = await fetch(`https://autos-rdbd.onrender.com/api/autos/modelo/${valorBuscado}`);
        const autosModelo = await response.json();

        //Obtiene autos por marca
        response = await fetch(`https://autos-rdbd.onrender.com/api/autos/marca/${valorBuscado}`);
        const autosMarca = await response.json();

        autosEncontrados = autosModelo.concat(autosMarca);

        //ELIMINO REPETIDOS
        const autosUnicos = [];

        autosEncontrados.forEach(auto => {//recore cada dato dentro de autosEncontrados
            if (!autosUnicos.some(a => a.marca === auto.marca && a.modelo === auto.modelo)) {//devuelve true si hay algun dato dentor de autos unico que cumpla la condicion
                autosUnicos.push(auto);
            }
        });
        
        return autosUnicos;

    }catch(error){
        console.log(`El error es: ${error}`);
        return [];
    }
};