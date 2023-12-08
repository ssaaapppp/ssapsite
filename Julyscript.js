function generateTimetable(day, teachers, classes) {
    return `
        <tr>
            <th>1교시</th>
            <th>2교시</th>
            <th>3교시</th>
            <th>4교시</th>
            <th>5교시</th>
            <th>6교시</th>
            ${classes === 7 ? "<th>7교시</th>" : ""}
        </tr>
        <tr>
            ${day.map(subject => `<td>${subject}</td>`).join('')}
        </tr>
        <tr>
        ${teachers.map(teacher => `<td>${teacher}</td>`).join('')}
        </tr>  
    `;
}

function updateTimetable(seld) {
    const dateSelector = document.getElementById("dateSelector");
    const sd = dateSelector.value;
    const timetableTable = document.getElementById("timetableTable");
    timetableTable.innerHTML = ""
    seld=sd;
    switch (seld) {
        case "monday":
            timetableTable.innerHTML = generateTimetable(["자율", "지리", "체육", "수학", "영어", "생명", "진로"],["이현희", "김갑철", "정성태", "이현희", "김은정", "신혜원", "정민주"],7);
            break;
        case "tuesday":
            timetableTable.innerHTML = generateTimetable(["음/미", "음/미", "수학", "일반사회", "국어", "영어", "독/프"],["윤수희", "윤수희", "이현희", "류정민", "최소연", "공소정", "정민주"], 7);
            break;
        case "wednesday":
            timetableTable.innerHTML = generateTimetable(["영어", "수학", "체육", "국어", "자율", "자율"],["정민주", "이현희", "정성태", "최수진", "이현희", "이현희"], 6);
            break;
        case "thursday":
            timetableTable.innerHTML = generateTimetable(["기가", "기가", "국어", "영어", "과탐실", "지구과학", "수학"],["현수경", "현수경", "김원규", "G.Smith", "최지훈", "송윤근", "이현희"], 7);
            break;
        case "friday":
            timetableTable.innerHTML = generateTimetable(["윤리", "독/프", "기가", "화학", "수학", "국어", "한국사"],["최지영", "정민주", "김창훈", "김영경", "이현희", "김원규", "남정호"], 7);
            break;
    }
}

function initTimetable(seld) {
    const dateSelector = document.getElementById("dateSelector");
    const timetableTable = document.getElementById("timetableTable");
    timetableTable.innerHTML = "";
    switch (seld) {
        case "monday":
            timetableTable.innerHTML = generateTimetable(["자율", "지리", "체육", "수학", "영어", "생명", "진로"],["이현희", "김갑철", "정성태", "이현희", "김은정", "신혜원", "정민주"],7);
            break;
        case "tuesday":
            timetableTable.innerHTML = generateTimetable(["음/미", "음/미", "수학", "일반사회", "국어", "영어", "독/프"],["윤수희", "윤수희", "이현희", "류정민", "최소연", "공소정", "정민주"], 7);
            break;
        case "wednesday":
            timetableTable.innerHTML = generateTimetable(["영어", "수학", "체육", "국어", "자율", "자율"],["정민주", "이현희", "정성태", "최수진", "이현희", "이현희"], 6);
            break;
        case "thursday":
            timetableTable.innerHTML = generateTimetable(["기가", "기가", "국어", "영어", "과탐실", "지구과학", "수학"],["현수경", "현수경", "김원규", "G.Smith", "최지훈", "송윤근", "이현희"], 7);
            break;
        case "friday":
            timetableTable.innerHTML = generateTimetable(["윤리", "독/프", "기가", "화학", "수학", "국어", "한국사"],["최지영", "정민주", "김창훈", "김영경", "이현희", "김원규", "남정호"], 7);
            break;
    }
}

function meal() {
    let url = "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=bf9859dcd1014bfc98d4382689ebe8d1&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7004180&MLSV_YMD=" + 20231201;
    fetch(url, {
    method: 'GET',
    headers: {
       'Content-Type': 'application/json',
    },
    })
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
     }
    return response.json();
    })
    .then(data => {
        document.getElementById("geup").innerHTML = "급식:"+"\n"+data;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

}

document.addEventListener("DOMContentLoaded", function() {
    diffDay()
    meal();
    const currentDate = new Date();
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const currentDay = daysOfWeek[currentDate.getDay()];
    document.getElementById('dateSelector').value = daysOfWeek[currentDate.getDay()];
    initTimetable(currentDay);
});

/***************/


const remainTime = document.querySelector("#remain-time");

function diffDay() {
    const masTime = new Date("2023-12-22");
    const todayTime = new Date();
    
    const diff = masTime - todayTime;
    
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
    
    remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

diffDay();
setInterval(diffDay, 1000);
