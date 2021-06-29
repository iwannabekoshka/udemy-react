import React, {useState} from 'react';
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const Modal = props => {
	return (
		<div>
			<div
				className={styles['backdrop']}
				onClick={props.onHideModal}
			></div>

			<Card className={styles['modal']}>
				<header className={styles['header']}>
					<h2>{props.title}</h2>
				</header>

				<div className={styles['content']}>
					<p>{props.message}</p>
				</div>

				<footer className={styles['actions']}>
					<Button onClick={props.onHideModal}>Okay</Button>
				</footer>
			</Card>
		</div>
	)
}

export default Modal;