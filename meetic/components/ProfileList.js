import { observer } from 'mobx-react';
import Profile from '../stores/Profile';

export const ProfileList = observer(
    (props) => <div>
        <h1>{props.data}</h1>
        {Profile[props.data].length}
    </div>
);
