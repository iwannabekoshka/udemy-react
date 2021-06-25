import React from 'react';
import styles from './Modal.module.css';

const Modal = props => {
	const closeModalHandler = event => {
		props.onCloseModale(false);
	}

	return (
		<div style={{display: props.visible ? 'block' : 'none'}} className={styles['overlay']}>
			<div className={styles['modal']}>
				<h2 className={styles['modal-title']}>Invalid input</h2>
				<div className={styles['modal-body']}>
					<p className={styles['modal-text']}>{props.text}</p>
					<div className={styles['modal-buttons']}>
						<button
							className={`button  ${styles['button']} `}
							onClick={closeModalHandler}
						>
							Okay
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal;