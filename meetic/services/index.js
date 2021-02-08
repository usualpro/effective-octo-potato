import { instance } from './instance';

export const Service = {
    online: () => instance.get('online'),
    featured: () => instance.get('featured')
}