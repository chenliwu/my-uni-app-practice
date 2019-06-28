const DateUtils = {
    prettyDate(hisTime, nowTime) {
        if (!arguments.length) return '';
        let arg = arguments,
            now = arg[1] ? arg[1] : new Date().getTime(),
            diffValue = now - arg[0],
            result = '',

            minute = 1000 * 60,
            hour = minute * 60,
            day = hour * 24,
            halfamonth = day * 15,
            month = day * 30,
            year = month * 12,

            _year = diffValue / year,
            _month = diffValue / month,
            _week = diffValue / (7 * day),
            _day = diffValue / day,
            _hour = diffValue / hour,
            _min = diffValue / minute;

        if (_year >= 1) {
            result = parseInt(_year) + "年前";
        } else if (_month >= 1) {
            result = parseInt(_month) + "个月前";
        } else if (_week >= 1) {
            result = parseInt(_week) + "周前";
        } else if (_day >= 1) {
            result = parseInt(_day) + "天前";
        } else if (_hour >= 1) {
            result = parseInt(_hour) + "个小时前";
        } else if (_min >= 1) {
            result = parseInt(_min) + "分钟前";
        } else {
            result = "刚刚";
        }
        return result;
    },
    timestampToShortTime(statusMinute) {
        statusMinute /= 1000;
        let time = statusMinute
        if (null != time && "" !== time) {
            if (time > 60 && time < 60 * 60) {
                time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
                    parseInt(time / 60.0)) * 60) + "秒";
            } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
                time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + "分钟" +
                    parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
            } else if (time >= 60 * 60 * 24) {
                time = parseInt(time / 3600.0 / 24) + "天" + parseInt((parseFloat(time / 3600.0 / 24) -
                    parseInt(time / 3600.0 / 24)) * 24) + "小时" + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + "分钟" +
                    parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
            } else {
                time = parseInt(time) + "秒";
            }
        }
        return time;
    }

}

export default DateUtils;