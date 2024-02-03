import {useState} from "react";
import FormCreation from "./formCreation";
import DisplayForm from "./displayForm";
import {DisplayDataProps} from "./formCreation";


export default function FormApp(){
    const [submitData, setSubmitData] = useState<DisplayDataProps>();

    const handleStoreData = (data:DisplayDataProps) => {
        setSubmitData(data);
    }
    
    return(
        <div className="formNDisplay">
            <FormCreation onSubmit={handleStoreData}/>
            <div className="line"></div>
            {submitData ? <DisplayForm data={submitData} />:<p className="defaultValue">No Activity Data</p>}
        </div>
    );
}