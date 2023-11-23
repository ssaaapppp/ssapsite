function generateTimetable(day, classes) {
    return `
        <tr>
            <th>요일</th>
            <th>1교시</th>
            <th>2교시</th>
            <th>3교시</th>
            <th>4교시</th>
            <th>5교시</th>
            <th>6교시</th>
            ${classes === 7 ? "<th>7교시</th>" : ""}
        </tr>
        <tr>
            <td>요일</td>
            ${day.map(subject => `<td>${subject}</td>`).join('')}
        </tr>
        ${classes === 7 ? `<tr><th>T</th>${day.map(() => '<td></td>').join('')}</tr>` : ''}
    `;
}

function updateTimetable() {
    const dateSelector = document.getElementById("dateSelector");
    const selectedDate = dateSelector.value;
    const timetableTable = document.getElementById("timetableTable");
    timetableTable.innerHTML = "";

    switch (selectedDate) {
        case "monday":
            timetableTable.innerHTML = generateTimetable(["자율", "지리", "체육", "수학", "영어", "생명", "진로"]);
            break;
        case "tuesday":
            timetableTable.innerHTML = generateTimetable(["음/미", "음/미", "수학", "일반사회", "국어", "영어", "독/프"], 7);
            break;
        case "wednesday":
            timetableTable.innerHTML = generateTimetable(["영어", "한국사", "체육", "국어", "자율", "자율"], 6);
            timetableTable.innerHTML += `<tr><th>T</th><td>정민주T</td><td></td><td></td><td>최수진T</td><td>동아리</td><td>동아리</td></tr>`;
            break;
        case "thursday":
            timetableTable.innerHTML = generateTimetable(["기가", "기가", "국어", "영어", "과탐실", "지구과학", "수학"], 7);
            timetableTable.innerHTML += `<tr><th>T</th><td></td><td></td><td>김원규T</td><td>원어민T</td><td>물리</td><td></td><td></td></tr>`;
            break;
        case "friday":
            timetableTable.innerHTML = generateTimetable(["윤리", "독/프", "기가", "화학", "수학", "국어", "한국사"], 7);
            break;
    }
}
