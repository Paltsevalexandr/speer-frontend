import React, { useState } from 'react';
import { getStartOfCurrentWeek, addZero } from '../../helpers/helpers';
import './Calendar.scss';
import CalendarTable from './CalendarTable';

export default function Calendar() {
    const [days, setDays] = useState(getDaysArr());


    function selectTime(changedDay) {
        setDays(days.map((day, index) => {
            if(index == changedDay.index) {
                return changedDay;
            }
            return day;
        }));
    }

    function getDaysArr() {
        let days = [];
        let startOfTheWeek = getStartOfCurrentWeek();

        for (let i = 0; i < 5; i++) {
            const date = new Date(startOfTheWeek.getTime() + i * 24 * 60 * 60 * 1000);
            days.push({
                index: i,
                date,
                partials: getDayPartials(date)
            });
        }

        return days;
    }

    function getDayPartials(date) {
        let dayPartials = [];
        let start = 9 * 60;
        let end = 18 * 60;
        for(let i = start; i <= end - 30; i+=30) {
            dayPartials.push(getDayPartial(i, date));
        }
        return dayPartials;
    }

    function getDayPartial(startDayMinutes, date) {
        let endDayMinutes = startDayMinutes + 30;
        let start = `${addZero((startDayMinutes - startDayMinutes % 60) / 60)}.${addZero(startDayMinutes % 60)}`;
        let end = `${addZero((endDayMinutes - endDayMinutes % 60) / 60)}.${addZero(endDayMinutes % 60)}`;
        
        return {
            time: `${start}-${end}`,
            timestamp: date.getTime() + startDayMinutes,
            isSelected() {
                return this.engineer != null && this.candidate != null
            },
            engineer: null,
            candidate: null, 
        };
    }

    return (
        <>
            {
                !Array.isArray(days) || days.length < 0
                    ? null
                    : <CalendarTable
                        selectTime={selectTime}
                        days={days}
                        />
            }
            
        </>
    )
}
