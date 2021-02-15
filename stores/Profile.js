import { makeAutoObservable, runInAction } from 'mobx';
import { Service } from '../services';

class Profile {
    online = [];
    featured = [];
    modalState = {
        isOpen: false,
        profile: null,
        category: null
    };

    constructor() {
        makeAutoObservable(this);
        this.fetchData();
    }

    next = profile => {
        const model = this[this.modalState.category];
        const indexOfProfile = model.indexOf(profile);
        const nextProfile = (typeof model[indexOfProfile + 1] !== 'undefined')
            ? model[indexOfProfile + 1]
            : model[0];
        runInAction(() => {
            this.modalState = {
                ...this.modalState,
                profile: nextProfile
            }
        })

    }

    showModal = (category, profile) => {
        runInAction(() => {
            this.modalState = {
                category,
                profile,
                isOpen: true
            }
        });
    }

    closeModal = () => {
        runInAction(() => {
            this.modalState = {
                isOpen: false,
                profile: null,
                category: null
            }
        });
    }

    drop = profile => {
        const onlined = this.online.filter(item => item.id !== profile.id);
        const featured = this.featured.filter(item => item.id !== profile.id);
        runInAction(() => {
            this.next(profile);
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