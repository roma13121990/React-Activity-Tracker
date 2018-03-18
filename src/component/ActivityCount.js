import React,{ Component,PropTypes } from 'react'
import { render } from 'react-dom'
import Calendar from 'react-icons/lib/fa/calendar'
import MdDirectionsRun from 'react-icons/lib/md/directions-run'
import MdDirectionsBike from 'react-icons/lib/md/directions-bike'
    const percentToDecimal = (decimal) =>{
        return (decimal * 100) + "%"; 
    }

    const calculateProgress = (total, goal) =>{
        return percentToDecimal(total/goal);
    }

    export const ActivityCount = ({total, running, cycling, goal=100}) => (
            <div className="active-day-count">

                <h4>Activity Tracker</h4>
                <div className="total-days">
                    <span>{total}</span>
                    <Calendar />
                    <span>days</span>
                </div>
                <div className="running-days">
                    <span>{running}</span>
                    <MdDirectionsRun />
                    <span>days</span> 
               </div>
                <div className="cycling-days">
                    <span>{cycling}</span>
                    <MdDirectionsBike />
                    <span>days</span>
                </div>
                <div>
                    <span>
                        Progress : {calculateProgress(total, goal)}
                    </span>
                </div>
            </div>
            )



