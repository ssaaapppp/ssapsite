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
    let url = "https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7004180MLSV_YMD=" + 20231127;
    let data="";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, "text/html");
            let elements = doc.querySelectorAll("DDISH_NM");
            data= doc.querySelectorAll("DDISH_NM");

            data = data.replace(/<br\/>/gi,"\n");
            data = data.replace(/<DDISH_NM>/gi, "");
            data = data.replace(/<\/DDISH_NM>/gi,"");
            data = data.replace(/<!\[CDATA\[/gi,"");
            data = data.replace(/]]>/gi,"");

            if(data!=="") document.getElementById("geup").innerHTML = "급식:"+"\n"+data;
            else document.getElementById("geup").innerHTML = "급식이 없습니다";
        })
        .catch(error => console.error('Error:', error));

}

document.addEventListener("DOMContentLoaded", function() {
    meal();
    const currentDate = new Date();
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const currentDay = daysOfWeek[currentDate.getDay()];
    initTimetable(currentDay);
});


