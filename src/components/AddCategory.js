import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // preventDefault evita que el navegador recarge
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cate => [inputValue, ...cate] );
            setInputValue('');
        }
        // console.log('submit hecho');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label>¿Que imágenes desea buscar?</label>
            <div className="inputs">
                <input
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
                <button onClick={handleSubmit}>Buscar</button>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}