import React from 'react'

function References(props) {

  const copy = (e) =>{    
    let p = document.getElementById(e.target.value);
    navigator.clipboard.writeText(p.textContent);
  }
  
  return (
    <>
        {props.Refs.map((values, key) =>
            <div key={key} className='rounded bg-white shadow-2xl h-min px-4 py-2 text-left mx-5 mb-2'>
              <p id={'text' + (key+1)}>
                {values.Autores.map((value, AutKey) => <span key={AutKey}>{value.AutorLastname}, {value.AuthName}.{values.Autores.length > AutKey + 1 ? ', ' : null} </span>)}
                <span>({values.Year}). {values.ArtName}. <i>{values.Revista}</i>, {values.Vol}, {values.InitialPage}{values.EndPage === values.InitialPage ? null || values.InitialPage === 0 : ' - ' + values.EndPage}. </span>
                <br></br>
                <a rel='noreferrer' className='text-blue-600 hover:underline' href={values.Url} target='_blank'>{values.Url}</a>
              </p>
              <button onClick={copy} value={'text' + (key+1)} className='bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mt-1'>Copiar al portapapeles</button>
            </div>
        )}
    </>
  )
}

export default References