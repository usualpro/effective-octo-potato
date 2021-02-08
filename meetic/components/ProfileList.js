import { observer } from 'mobx-react';
import Profile from '../stores/Profile';

export const ProfileList = observer(
    (props) => <div className='ProfileList'>
        <h2>{props.data}</h2>
        <div className="row gy-4">
            {
                Profile[props.data].map(
                    (e, i) => <div className='col-4 col-md-3 col-lg' key={i}>
                        <button className='ratio ratio-1x1 border-0' onClick={() => Profile.drop(e)}>
                            <img className='object-fit-cover img-fluid rounded' src={e.picture} alt={e.nickname} />
                        </button>
                    </div>
                )
            }
        </div>
    </div>
);
