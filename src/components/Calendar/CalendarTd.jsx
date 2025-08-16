import React from 'react'

export default function CalendarTd({ partial, selectTime, day, index }) {
    let className = 'calendar__data';
    if(partial.isSelected()) {
        className = `${className} calendar__data-selected`;
    }
    return (
        <td className={className}
            onClick={
                () => {
                    selectTime({
                        ...day,
                        partials: day.partials.map((targetPartial, targetIndex) => {
                            return targetIndex == index
                            ? {
                                ...targetPartial,
                                engineer: "Oleksandr Paltsev",
                                candidate: "John Doe"
                            }
                            : targetPartial
                        })                                    
                    })
                }
            }>
            {
                partial.isSelected()
                ? (
                    <span>
                        {`Engineer: ${partial.engineer}`} 
                        <br />
                        {`Candidate: ${partial.candidate}`}
                    </span>)
                : (
                    <span>
                        Not selected
                        <br />
                    </span>
                )
            }
        </td>
    )
}
