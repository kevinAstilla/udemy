import React from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css';

// UI
import Button from './Button';
import Card from './Card';

const Backdrop = (props) => {
    return(<div className={styles.backdrop} onClick={props.onConfirm}/>);
}

const ModalOverlay = (props) => {
    return(
        <Card className={`${styles['modal']}`}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                {props.message}
            </div>
            <footer className={styles.actions}>
                <Button
                    type="button"
                    onClick={props.onConfirm}
                    >
                    {props.confirmButton}
                    
                </Button>  
            </footer>
        </Card>
    );
}
const Modal = (props) => {    
    return(
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(
                <ModalOverlay title={props.title} onConfirm={props.onConfirm} message={props.message} confirmButton={props.confirmButton} />,
                document.getElementById('modal-root'))}            
        </React.Fragment>

    );
}

export default Modal;