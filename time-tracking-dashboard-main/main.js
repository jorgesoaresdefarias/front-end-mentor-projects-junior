const data = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`;


const jsonData = JSON.parse(data);
const button_day = document.getElementById('daily');
const button_weekly = document.getElementById('weekly');
const button_monthly = document.getElementById('monthly');

const work_hours = document.getElementById('work_hours');
const work_description = document.getElementById('work_description');

const play_hours = document.getElementById('play_hours');
const play_description = document.getElementById('play_description');

const study_hours = document.getElementById('study_hours');
const study_description = document.getElementById('study_description');

const exercise_hours = document.getElementById('exercise_hours');
const exercise_description = document.getElementById('exercise_description');

const social_hours = document.getElementById('social_hours');
const social_description = document.getElementById('social_description');

const self_care_hours = document.getElementById('self_care_hours');
const self_care_description = document.getElementById('self_care_description');

function daily(){
    work_hours.innerHTML = jsonData[0].timeframes.daily.current +"hrs";
    work_description.innerHTML = "yesterday - " + jsonData[0].timeframes.daily.current+"hrs";

    play_hours.innerHTML = jsonData[1].timeframes.daily.current +"hrs";
    play_description.innerHTML = "yesterday - " + jsonData[1].timeframes.daily.current+"hrs";

    study_hours.innerHTML = jsonData[2].timeframes.daily.current +"hrs";
    study_description.innerHTML = "yesterday - " + jsonData[2].timeframes.daily.current+"hrs";

    exercise_hours.innerHTML = jsonData[2].timeframes.daily.current +"hrs";
    exercise_description.innerHTML = "yesterday - " + jsonData[2].timeframes.daily.current+"hrs";

    social_hours.innerHTML = jsonData[3].timeframes.daily.current +"hrs";
    social_description.innerHTML = "yesterday - " + jsonData[3].timeframes.daily.current+"hrs";

    self_care_hours.innerHTML = jsonData[4].timeframes.daily.current +"hrs";
    self_care_description.innerHTML = "yesterday - " + jsonData[5].timeframes.daily.current+"hrs";

    button_day.style.color = "white";
    button_monthly.style.color = "";
    button_weekly.style.color = "";
}

function weekly(){
    work_hours.innerHTML = jsonData[0].timeframes.weekly.current +"hrs";
    work_description.innerHTML = "yesterday - " + jsonData[0].timeframes.weekly.current+"hrs";

    play_hours.innerHTML = jsonData[1].timeframes.weekly.current +"hrs";
    play_description.innerHTML = "yesterday - " + jsonData[1].timeframes.weekly.current+"hrs";

    study_hours.innerHTML = jsonData[2].timeframes.weekly.current +"hrs";
    study_description.innerHTML = "yesterday - " + jsonData[2].timeframes.weekly.current+"hrs";

    exercise_hours.innerHTML = jsonData[2].timeframes.weekly.current +"hrs";
    exercise_description.innerHTML = "yesterday - " + jsonData[2].timeframes.weekly.current+"hrs";

    social_hours.innerHTML = jsonData[3].timeframes.weekly.current +"hrs";
    social_description.innerHTML = "yesterday - " + jsonData[3].timeframes.weekly.current+"hrs";

    self_care_hours.innerHTML = jsonData[4].timeframes.daily.current +"hrs";
    self_care_description.innerHTML = "yesterday - " + jsonData[5].timeframes.weekly.current+"hrs";

    button_day.style.color = "";
    button_monthly.style.color = "";
    button_weekly.style.color = "white";
}

function monthly(){
    work_hours.innerHTML = jsonData[0].timeframes.monthly.current +"hrs";
    work_description.innerHTML = "yesterday - " + jsonData[0].timeframes.monthly.current+"hrs";

    play_hours.innerHTML = jsonData[1].timeframes.monthly.current +"hrs";
    play_description.innerHTML = "yesterday - " + jsonData[1].timeframes.monthly.current+"hrs";

    study_hours.innerHTML = jsonData[2].timeframes.monthly.current +"hrs";
    study_description.innerHTML = "yesterday - " + jsonData[2].timeframes.monthly.current+"hrs";

    exercise_hours.innerHTML = jsonData[2].timeframes.monthly.current +"hrs";
    exercise_description.innerHTML = "yesterday - " + jsonData[2].timeframes.monthly.current+"hrs";

    social_hours.innerHTML = jsonData[3].timeframes.monthly.current +"hrs";
    social_description.innerHTML = "yesterday - " + jsonData[3].timeframes.monthly.current+"hrs";

    self_care_hours.innerHTML = jsonData[4].timeframes.monthly.current +"hrs";
    self_care_description.innerHTML = "yesterday - " + jsonData[5].timeframes.monthly.current+"hrs";

    button_day.style.color = "";
    button_monthly.style.color = "white";
    button_weekly.style.color = "";
}
