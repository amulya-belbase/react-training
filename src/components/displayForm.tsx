import { DisplayDataProps } from "./formCreation";


// defines structure of the props
interface DisplayFormProps {
    data: DisplayDataProps;
}


export default function DisplayForm({ data }: DisplayFormProps) {
    return (
        <div className="displayDataContainer">
            <p>Name: {data.user.username}</p>
            <p>Age: {data.user.age}</p>
            <p>Contact No.: {data.user.contactno}</p>
            <div className="activityInfoContainer">
                {data.activities.map((activity, index) => (
                    <div key={index} className="activityInfo">
                        <strong>Activity {index + 1}:</strong>
                        <p>Description: {activity.description}</p>
                        <p>Time Spent: {activity.timespent}</p>
                    </div>
                ))}
            </div>


        </div>
    );
}