import Profile from '../stores/Profile';
import { observer } from 'mobx-react';

export const Modal = observer(
    () => (Profile.modalState.isOpen)
        ? <div className='modal'>
            <button className='btn backdrop' onClick={Profile.closeModal}></button>
            <div className='modal-inner-content container'>
                <div className='row'>
                    <div className='col'>
                        <img src={Profile.modalState.profile.picture} alt="" />
                    </div>
                </div>
            </div>
        </div>
        : null
);