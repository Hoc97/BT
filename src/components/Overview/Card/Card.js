import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Card({ data, handleClose, index }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teamcode = data.abbreviation;
    const results = useSelector((state) => state.userManage.results?.[index]) ?? [];
    const team = useSelector((state) => state.userManage.team?.[index]) ?? {};
    const teamss = useSelector((state) => state.userManage.team) ?? {};
    console.log('teamss', teamss);
    useEffect(() => {
        dispatch({ type: 'GETDATA_RESULT', teamcode });
    }, []);
    let winScore = 0;
    let loseScore = 0;
    const findIndexMax = (array) => {
        let indexMax = 0;
        array.forEach((item, index) => {
            if (indexMax < index) {
                indexMax = index;
            }
        });
        return indexMax;
    };
    return (
        <div className='content'>
            <div className='name'>
                <h1>
                    {data.full_name} [{data.abbreviation}]
                </h1>
                <p>{data.conference} conference</p>
            </div>
            <hr />
            <div className='detail'>
                <div>
                    {results.length > 0 &&
                        results.map((a, i) => {
                            if (a.home_team.abbreviation === teamcode) {
                                winScore += a.home_team_score;
                                loseScore += a.visitor_team_score;
                                return (
                                    <span
                                        key={i}
                                        className='score'
                                        style={{
                                            backgroundColor: a.home_team_score > a.visitor_team_score ? 'green' : 'red',
                                        }}
                                    >
                                        {a.home_team_score > a.visitor_team_score ? 'W' : 'L'}
                                    </span>
                                );
                            } else {
                                winScore += a.visitor_team_score;
                                loseScore += a.home_team_score;
                                return (
                                    <span
                                        key={i}
                                        className='score'
                                        style={{
                                            backgroundColor: a.home_team_score > a.visitor_team_score ? 'red' : 'green',
                                        }}
                                    >
                                        {a.home_team_score > a.visitor_team_score ? 'L' : 'W'}
                                    </span>
                                );
                            }
                        })}

                    <p>Home Score avg : {(winScore / (findIndexMax(results) + 1)).toFixed(0)}</p>
                    <p>Visitor Score avg : {(loseScore / (findIndexMax(results) + 1)).toFixed(0)}</p>
                </div>
                <img height={100} src={`https://interstate21.com/nba-logos/${data.abbreviation}.png`} alt='' />
            </div>
            <button
                onClick={() => navigate('results/' + data.abbreviation, { state: { index, team } })}
                className='result'
            >
                Check Game result
            </button>
            <button className='btn-close' onClick={handleClose}>
                X
            </button>
        </div>
    );
}

export default Card;
