import Profile from '../stores/Profile';
import { observer } from 'mobx-react';

export const Modal = observer(
    () => (Profile.modalState.isOpen)
        ? <div className='modal'>
            <button className='btn backdrop' onClick={Profile.closeModal}></button>
            <div className='modal-inner-content container'>
                <div className="row">
                    <div className="col">
                        <div className='row'>
                            <div className='col'>
                                <img className='img-fluid' src={Profile.modalState.profile.picture} alt="" />
                            </div>
                        </div>

                        <div className="row text-white">
                            <div className="col-12">
                                <i className={`bi-check-circle${(Profile.modalState.profile.online) ? '-fill' : ''}`} /> {Profile.modalState.profile.nickname}
                            </div>
                            <div className="col-12">
                                {Profile.modalState.profile.age}
                            </div>
                            <div className="col-12">
                                {Profile.modalState.profile.city}
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-6">
                                <button className='btn btn-primary w-100'>
                                    <i className='bi-suit-heart'></i>
                                </button>
                            </div>
                            <div className="col-6">
                                <button className='btn btn-primary w-100'>
                                    <i className='bi-suit-heart-fill'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : null
);