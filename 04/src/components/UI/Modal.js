import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = props => {
	return (
		<div
			className={styles['backdrop']}
			onClick={props.onHideModal}
		></div>
	)
};

const ModalOverlay = props => {
	return (
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
	)
};

const Modal = props => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop
					onHideModal={props.onHideModal}
				/>,
				document.getElementById('root-backdrop')
			)}
			{
				ReactDOM.createPortal(
					<ModalOverlay
						title={props.title}
						message={props.message}
						onHideModal={props.onHideModal}
					/>,
					document.getElementById('root-modal-overlay')
				)
			}
		</React.Fragment>
	)
};

export default Modal;