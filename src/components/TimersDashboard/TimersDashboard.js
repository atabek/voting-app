import React, {Component} from 'react';

import ToggleableTimerFomr from "../ToggleableTimerForm/ToggleableTimerForm";
import EditableTimerList from "../EditableTimerList/EditableTimerList";

class TimersDashboard extends Component {
    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList />
                    <ToggleableTimerFomr isOpen={true}/>
                </div>
            </div>
        );
    }
}

export default TimersDashboard;