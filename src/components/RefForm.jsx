import React, {useEffect, useState} from 'react'

function RefForm(props) {

    const [numAutores, setAutores] = useState(1);
    const [AutorsControls, setControls] = useState([]);

    const renderAutorsControls = () =>{
        let inputs = [];
        for(let i = 0; i < numAutores; i++){
            inputs.push(
                <>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label htmlFor={'name' + i} className='block text-gray-700 text-sm font-bold mb-2'>Inicial del Autor {i + 1}</label>
                            <input id={'AutorName' + i} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Inicial del autor' type='text'  required/>
                        </div>
                        <div className='w-full md:w-1/2 px-3'>
                            <label htmlFor={'lastname' + i} className='block text-gray-700 text-sm font-bold mb-2'>Apellidos del Autor {i + 1}</label>
                            <input id={'lastname' + i} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Apellidos del autor' type='text'  required/>
                        </div>
                    </div>
                </>
            );
        }
        setControls(inputs);
    }

    const formInternHandler = (e)=>{
        let tempRef = {
            AuthName : e.target.name.value,
            AutorLastname : e.target.lastname.value,
            Year : e.target.year.value,
            Vol : e.target.vol.value,
            ArtName : e.target.ArtName.value,
            Revista : e.target.revista.value,
            InitialPage : e.target.page1.value,
            EndPage : e.target.page2.value,
            Url : e.target.url.value
        };
        props.formHandler(e);
    }

    useEffect(()=>{
        renderAutorsControls();
    }, [numAutores]);

    return (
    <>
        <div className='w-full max-w-lg'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={formInternHandler}>
                <div className='flex flex-col -mx-3 mb-6'>
                    <label htmlFor='numAutores' className='block text-gray-700 text-sm font-bold mb-2'>Numero de Autores</label>
                    <input type='number' id='numAutores' className='shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Numero de autores' defaultValue={1} onChange={(e) => e.target.value > 0 ? setAutores(e.target.value) : e.target.value = 1}/>
                </div>
                {AutorsControls.map(value => <>{value}</>)}
                <div className='flex flex-wrap -mx-4 mb-6 items-end'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor='year' className='block text-gray-700 text-sm font-bold mb-2'>Año de publicación</label>
                        <input name='year' id='year' placeholder='Año'  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='number'  required/>
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <label htmlFor='vol' className='block text-gray-700 text-sm font-bold mb-2'>Volumen/Numero de la publicacion</label>
                        <input name='vol' id='vol' placeholder='Volumen o Numero de la publicación'  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text'  required/>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-1 mb-6'>
                    <label htmlFor='ArtName' className='block text-gray-700 text-sm font-bold mb-2'>Nombre del Articulo</label>
                    <input name='ArtName' id='ArtName' placeholder='NombreArticulo' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text'  required/>
                    <label htmlFor='revista' className='block text-gray-700 text-sm font-bold mb-2'>Revista</label>
                    <input name='revista' id='revista' placeholder='Revista' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text'  required/>
                </div>
                <div className='flex flex-wrap -mx-4 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor='page1' className='block text-gray-700 text-sm font-bold mb-2'>Pagina Inicial</label>
                        <input name='initialPage' id='page1' placeholder='Página Inicial' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='number' defaultValue={0} required/>
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <label htmlFor='page2' className='block text-gray-700 text-sm font-bold mb-2'>Pagina Final</label>
                        <input name='endPage' id='page2' placeholder='Página Final' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='number' defaultValue={0}/>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-1 mb-6'>
                    <label htmlFor='url' className='block text-gray-700 text-sm font-bold mb-2'>Enlace del Articulo</label>
                    <input name='Url' id='url' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enlace' type='url' required/>
                </div>
                <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='submit'>Hacer referencia</button>
            </form>
        </div>
    </>
  )
}

export default RefForm