import { observer } from 'mobx-react';
import Profile from '../stores/Profile';

export const ProfileList = observer(
    (props) => <div className='ProfileList'>
        <h2>{props.data}</h2>
        <div className="row">
            {
                Profile[props.data].map(
                    (e, i) => <div className='col-4' key={i}>
                        <button className='ratio ratio-1x1 border-0'>
                            <img src={e.picture} alt={e.nickname} />
                        </button>
                    </div>
                )
            }
        </div>
    </div>
);
