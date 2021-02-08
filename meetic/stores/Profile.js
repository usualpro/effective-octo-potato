import { makeAutoObservable, runInAction } from 'mobx';
import { Service } from '../services';

class Profile {
    online = [];
    featured = [];
    
    constructor() {
        makeAutoObservable(this);
        this.fetchData();
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