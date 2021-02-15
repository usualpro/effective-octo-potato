import Profile from '../stores/Profile';
import { observer } from 'mobx-react';

export const Modal = observer(
    () => (Profile.modalState.isOpen)
        ? <h2>
            MODAL {JSON.stringify(Profile.modalState.isOpen)}
            <button onClick={Profile.showModal}>Passe a true</button>
            <button onClick={Profile.closeModal}>Passe a false</button>
        </h2>
        : null
);