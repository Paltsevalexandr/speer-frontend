import React from 'react';
import CalendarTd from './CalendarTd';

export default function CalendarRow({ days, index, selectTime }) {
    let firstColumnTitle = null;
    if (days.length > 0) {
        const firstDay = days[0];
        if (Array.isArray(firstDay.partials)) {
            if (firstDay.partials.length > index) {
                firstColumnTitle = firstDay.partials[index].time;
            }
        }
    }
    return (
        <tr>
            <td className='calendar__data'>
                {
                    firstColumnTitle
                }
            </td>
            {
                days.map((day, dayIndex) => {
                    return day.partials.map((partial, partialIndex) => {
                        if (partialIndex == index) {
                            return (
                                <CalendarTd
                                    key={`calendar-td-${dayIndex}-${index}`}
                                    selectTime={selectTime}
                                    partial={partial}
                                    index={index}
                                    day={day}
                                />
                            )
                        }
                    })
                })
            }
        </tr>
    )
}
