import React from 'react'

export default props =>{
    return (
        <div>
            {/*receber esses dados de um componente pai e serão passados via props*/}
            <div>{props.texto} </div>
            <div><strong>{props.numero}</strong> </div>
            <div>{props.bool ? 'Verdadeiro':'Falso'}</div>
        </div>
    )
}