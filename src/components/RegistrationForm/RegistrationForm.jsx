// import React from "react";
import css from './RegistrationForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { envelope } from "../../SVG/envelope.svg";
const RegistrationForm = () => {
	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().required('Required'),
	});

	return (
		<div className={css.container}>
			<div className={css.logo}>
				<img
					className={css.logo__icon}
					src='/logo.svg'
					alt='logo'
				/>
				<h1 className={css.logo__txt}>Wallet</h1>
			</div>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={SignupSchema}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form className={css.form}>
					<div className={css.input__div}>
						<Field
							className={css.input__email}
							id='email'
							name='email'
							placeholder='Email'
						/>
						<ErrorMessage
							name='email'
							component='Field'
						/>
					</div>
					<div className={css.input__div}>
						<Field
							className={css.input__password}
							type='password'
							id='password'
							name='password'
							placeholder='Password'
						/>
						<ErrorMessage
							name='password'
							component='Field'
						/>
					</div>
					<button
						className={css.login}
						type='submit'
					>
						LOG IN
					</button>
				</Form>
			</Formik>
			<button
				className={css.register}
				type='button'
			>
				REGISTER
			</button>
		</div>
	);
};

export default RegistrationForm;
