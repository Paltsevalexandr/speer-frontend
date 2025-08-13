import React from 'react';
import { DAYS, getFormattedDate, addZero } from '../../helpers/helpers';
import './Day.scss';

export default function Day({date, selectTime}) {
    function getDayPartials() {
        let dayPartials = [];
        let start = 9 * 60;
        let end = 18 * 60;
        for(let i = start; i <= end - 30; i+=30) {
            dayPartials.push(getPartialFormattedTime(i));
        }
        return dayPartials;
    }

    function getPartialFormattedTime(startDayMinutes) {
        let endDayMinutes = startDayMinutes + 30;
        let start = `${addZero((startDayMinutes - startDayMinutes % 60) / 60)}.${addZero(startDayMinutes % 60)}`;
        let end = `${addZero((endDayMinutes - endDayMinutes % 60) / 60)}.${addZero(endDayMinutes % 60)}`;
        return `${start}-${end}`;
    }

    return (
        <div className='day'>
            <div className="day__title">
                <p>
                    {DAYS[date.date.getDay() - 1]}
                </p>
                <p>
                    {getFormattedDate(date.date)}
                </p>
            </div>
                 {
                    date.partials.map((partial, index) => {
                        let className = 'day__partial';
                        if(partial.isSelected) {
                            className = `${className} day__partial-selected`;
                        }
                        return (
                            <div key={`day-partial-${index}`} 
                                className={className}
                                onClick={() => selectTime({
                                    ...date,
                                    partials: date.partials.map((targetPartial, targetIndex) => {
                                        if(targetIndex == index){
                                            let updatedPartial = {...targetPartial, isSelected: !targetPartial.isSelected};
                                            console.log(updatedPartial)
                                            return updatedPartial;
                                        }
                                        return targetPartial;
                                    })                                    
                                })}>
                                {partial.time}
                            </div>
                        )
                    })
                }
           
        </div>
    )
}
