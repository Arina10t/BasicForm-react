import { useState } from 'react';
import './App.css';

function App() {

	const [values, setValues] = useState({
		name: "",
		surname: "",
		email: ""
	});

	const [error, setError] = useState(false);
	const [hasSent, setHasSent] = useState(false);

	const checkValue = (event) => {
		event.preventDefault();
		if (!values.name || !values.surname || !values.email) {
			setError(true);
		} else {
			setError(false);
		}

		setHasSent(true);
	}

  return (
    <div className="form-container">
			<form onSubmit={checkValue}>
				{!error && hasSent && <span className='success'>Спасибо за регистрацию!</span>}
				<label htmlFor='name'>Имя:</label>
				<input type='text' name='name' placeholder='Иван' value={values.name} onChange={(e) => setValues({...values, name: e.target.value})}/>
				{hasSent && !values.name && <span>Заполните поле!</span>}
				<label htmlFor='surname'>Фамилия:</label>
				<input type='text' name='surname' placeholder='Иванов' value={values.surname} onChange={(e) => setValues({...values, surname: e.target.value})}/>
				{hasSent && !values.surname && <span>Заполните поле!</span>}
				<label htmlFor='email'>Электронная почта:</label>
				<input type='email'name='email' placeholder='ivanov@mail.ru' value={values.email} onChange={(e) => setValues({...values, email: e.target.value})}/>
				{hasSent && !values.email && <span>Заполните поле!</span>}
		
				<button type='submit' onClick={(e) => checkValue(e)}>Отправить</button>
			</form>
    </div>
  );
}

export default App;
