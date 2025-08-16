import React from 'react';
import {DAYS, getFormattedDate} from '../../helpers/helpers';

export default function CalendarHead({days}) {
    return (
        <thead>
            <tr>
                <td className="calendar__title day__title-left">
                    <p>Date</p>
                    <p>Time</p>
                </td>
                {
                    days.map((day, dayIndex) => {
                        return (
                            <td className='calendar__title'
                                key={`day-title-${dayIndex}`}>
                                <p>
                                    {DAYS[day.date.getDay() - 1]}
                                </p>
                                <p>
                                    {getFormattedDate(day.date)}
                                </p>
                            </td>
                        )
                    })
                }
            </tr>
        </thead>
    )
}
