import React, { useState } from 'react';
import { getStartOfCurrentWeek, addZero } from '../../helpers/helpers';
import Day from '../Day/Day';
import './Calendar.scss';

export default function Calendar() {
    const [days, setDays] = useState(getDaysArr());


    function selectTime(changedDay) {
        setDays(days.map((day, index) => {
            if(index == changedDay.index) {
                console.log(changedDay);
                return changedDay;
            }
            return day;
        }));
    }

    function getDaysArr() {
        let days = [];
        let startOfTheWeek = getStartOfCurrentWeek();

        for(let i = 0; i < 5; i++) {
            days.push({
                index: i,
                date: new Date(startOfTheWeek.getTime() + i * 24 * 60 * 60 * 1000),
                partials: getDayPartials()
            });
        }

        return days;
    }

    function getDayPartials() {
        let dayPartials = [];
        let start = 9 * 60;
        let end = 18 * 60;
        for(let i = start; i <= end - 30; i+=30) {
            dayPartials.push(getDayPartial(i));
        }
        return dayPartials;
    }

    function getDayPartial(startDayMinutes) {
        let endDayMinutes = startDayMinutes + 30;
        let start = `${addZero((startDayMinutes - startDayMinutes % 60) / 60)}.${addZero(startDayMinutes % 60)}`;
        let end = `${addZero((endDayMinutes - endDayMinutes % 60) / 60)}.${addZero(endDayMinutes % 60)}`;
        return {
            time: `${start}-${end}`,
            isSelected: false
        };
    }

    return (
        <div className='calendar'>
            {
                days.map((date, index) => {
                    return (
                        <Day 
                        key={`day-${index}`} 
                        date={date} 
                        selectTime={selectTime}
                        />
                    )
                })
            }
        </div>
    )
}
