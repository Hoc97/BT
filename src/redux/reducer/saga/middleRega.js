import { takeLatest, put, delay, call } from 'redux-saga/effects';
import { GetLastDates } from '../../../components/DateHelper/DateHelper';

async function GetUserApi() {
    let res = await fetch('https://free-nba.p.rapidapi.com/teams', {
        headers: {
            'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        },
    });
    let dt = await res.json();
    return dt.data;
}
function* GETDATA({ type, keydata }) {
    yield delay(1000);
    let data = yield call(GetUserApi);
    // console.log('data1', data);
    yield put({
        type: 'SET_DATA',
        payload: data,
    });
}

async function GetUserApiResult(teamcode) {
    let res = await fetch('https://free-nba.p.rapidapi.com/teams', {
        headers: {
            'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        },
    });
    let dt = await res.json();
    let tm = dt.data.filter((n) => n.abbreviation === teamcode)[0];
    let lsDate = GetLastDates(12)
        .map((n) => `dates[]=${n}`)
        .join('&');
    //kết quả của 12 ngày trước: console.log(lsDate);dates[]=2023-02-22&dates[]=2023-02-21&dates[]=2023-02-20&dates
    // []=2023-02-19&dates[]=2023-02-18&dates[]=2023-02-17&dates[]=2023-02-16&dates[]=2023-02-15&dates[]=2023-02-14
    // &dates[]=2023-02-13&dates[]=2023-02-12&dates[]=2023-02-11
    let res2 = await fetch(`https://free-nba.p.rapidapi.com/games?page=0&per_page=12&team_ids[]=${tm.id}&${lsDate}`, {
        headers: {
            'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        },
    });
    let dt2 = await res2.json();
    let results = dt2.data;
    return {
        tm,
        results,
    };
}

function* GETDATA_RESULT({ type, teamcode }) {
    yield delay(1000);
    let data = yield call(GetUserApiResult, teamcode);
    // console.log('data2', data);
    yield put({
        type: 'SET_DATA_RESULT',
        payload: data,
    });
}

function* middleReSa() {
    yield takeLatest('GETDATA', GETDATA);
    yield takeLatest('GETDATA_RESULT', GETDATA_RESULT);
}

export default middleReSa;
