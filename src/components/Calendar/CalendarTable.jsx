import React from 'react';
import CalendarRow from './CalendarRow';
import CalendarHead from './CalendarHead';

export default function CalendarTable({days, selectTime}) {
  return (
    <table className='calendar'>
        <CalendarHead
            days={days}
        />
        <tbody>
            {
                new Array(days[0].partials.length).fill(0).map((item, index) => {
                    return (
                        <CalendarRow
                            key={`calendar-row-${index}`}
                            selectTime={selectTime}
                            days={days}
                            index={index}
                        />
                    )
                })
            }
        </tbody>
    </table>
  )
}
