import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function GameResult() {
    const location = useLocation();
    const results = useSelector((state) => state.userManage.results[location.state.index]) ?? [];
    const team = useSelector((state) => state.userManage.team[location.state.index]) ?? {};
    const navigte = useNavigate();
    const { teamcode } = useParams();
    console.log('team', team);
    console.log('results', results);

    return (
        <div className='game-container'>
            {results.length > 0 && (
                <>
                    <h1>
                        {team.full_name} [{teamcode}]
                    </h1>
                    <p>{team.conference} conference</p>
                    <hr />
                    <p>Past results of 12 days:</p>

                    {results.map((item, index) => {
                        return (
                            <p key={index}>
                                <span className='home'>(home)</span> {item.home_team.abbreviation}{' '}
                                {item.home_team_score} - {item.visitor_team_score} {item.visitor_team.abbreviation}{' '}
                                <span className='visit'>(visit)</span>
                            </p>
                        );
                    })}
                </>
            )}
            <div className='back' onClick={() => navigte('/')}>
                &#60;&#60;&#60; Back to all team{' '}
            </div>
        </div>
    );
}

export default GameResult;
