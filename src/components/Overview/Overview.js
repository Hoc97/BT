import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card/Card';
import { useDispatch, useSelector } from 'react-redux';
function Overview() {
    const dispatch = useDispatch();
    const lsTeam = useSelector((state) => state.userManage.list);

    // console.log('lsTeam', lsTeam);

    // console.log('code>>>', location.state.teamcode);
    const [lsTracking, setLsTracking] = useState([]);
    const [teamCode, setTeamCode] = useState('');
    useEffect(() => {
        dispatch({ type: 'GETDATA' });
    }, []);

    const handleTrackTeam = () => {
        // console.log(lsTeam);
        let team = lsTeam.filter((n) => n.abbreviation === teamCode)[0];
        // console.log('team', team);
        if (team) {
            setLsTracking((prevState) => {
                return [...prevState, team];
            });
        }
    };
    // console.log(lsTracking);
    const handleChange = (e) => {
        console.log(teamCode);
        setTeamCode(e.target.value);
    };

    const handleClose = (index) => {
        console.log(index);

        setLsTracking((prevState) => {
            let newLsTracking = [...prevState];
            newLsTracking.splice(index, 1);
            // console.log(newLsTracking);
            return newLsTracking;
        });
    };

    return (
        <div>
            <select onChange={handleChange}>
                <option hidden>Select your team....</option>
                {lsTeam.map((n, i) => {
                    return (
                        <option key={i} value={n.abbreviation}>
                            {n.full_name}
                        </option>
                    );
                })}
            </select>
            <button onClick={() => handleTrackTeam()}>Track team</button>
            <div className='container'>
                {lsTracking.map((n, i) => {
                    // console.log(n);
                    return <Card data={n} key={i} index={i} handleClose={() => handleClose(i)} />;
                })}
            </div>
        </div>
    );
}

export default Overview;
