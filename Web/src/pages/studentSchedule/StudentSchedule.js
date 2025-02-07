

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { myevents, myresources } from "./data";
import { format, parse, startOfWeek, getDay } from "date-fns";
import PageHeader from "../../components/PageHeader";
import './studentSchedule.scss';
const locales = {
	"en-US": require("date-fns")
};
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales
});
const StudentSchedule = () => {

 
      
   

   

    return ( 
        <>
        <PageHeader pageName="Scheduler"/>
        <div className="p-3">
        <Calendar
        events={myevents}
        localizer={localizer}
        defaultDate={new Date(2023, 6, 8)}
        style={{ height: window.innerHeight-150 }}
    /></div>
    </>
     );
}
 
export default StudentSchedule;