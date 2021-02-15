import { makeAutoObservable, runInAction } from 'mobx';
import { Service } from '../services';

class Profile {
    online = [];
    featured = [];
    modalState = {
        isOpen: false
    };

    constructor() {
        makeAutoObservable(this);
        this.fetchData();
    }

    showModal = () => {
        this.modalState.isOpen = true;
    }

    closeModal = () => {
        this.modalState.isOpen = false;
    }

    drop = profile => {
        const onlined = this.online.filter(item => item.id !== profile.id);
        const featured = this.featured.filter(item => item.id !== profile.id);
        runInAction(() => {
            this.online = onlined;
            this.featured = featured;
        });
    }


    fetchData = async () => {
        const featured = await Service.featured();
        const online = await Service.online();
        runInAction(() => {
            this.featured = featured.data;
            this.online = online.data;
        });
    }
}

export default new Profile();