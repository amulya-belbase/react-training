import { useState } from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// defines structure of data
export interface DisplayDataProps {
    user: {
        username: string;
        age: number;
        contactno: string;
    };
    activities: {
        description: string;
        timespent: string;
    }[];
};

interface ActivityFormProps {
    onSubmit: (data: DisplayDataProps) => void;
}


export default function FormCreation({ onSubmit }: ActivityFormProps) {

    // to dynamically change activities array
    const [activities, setActivities] = useState([
        {
            description: "",
            timespent: "",
        },
    ]);

    // creating a schema based on DisplayDataProps interface
    const schema: ZodType<DisplayDataProps> = z
        .object({
            user: z.object({
                username: z.string().min(2),
                age: z.number().min(0),
                contactno: z.string().min(8),
            }),
            activities: z.array(
                z.object({
                    description: z.string().min(2),
                    timespent: z.string().min(2),
                })
            ),
        });

    // Set up form handling with validation using Zod schema
    const {
        register,        // get form inputs
        handleSubmit,    // handlesubmit passes data to submitnewdata only when validation is passed
        formState: { errors },  // access validation errors
    } = useForm<DisplayDataProps>({
        resolver: zodResolver(schema),  // to resolve validation based on defined zod schema
    });

    // creates new array when add new activity button is clicked
    const addNewActivity = () => {
        setActivities([...activities, { description: "", timespent: "" }]);
    };

    // submitnewdata is called and data is passed to it only when validation is passed
    const submitNewData = (data: DisplayDataProps) => {
        console.log(data);
        onSubmit(data);
    };


    return (
        <div className="formContainer">

            <h1>Activity Form</h1>

            <form className="form" onSubmit={handleSubmit(submitNewData)}>

                <div className="formElements">
                    <label>
                        Username:
                        <input
                            type="text"
                            {...register("user.username")}
                        />
                    </label>
                    {errors.user?.username && <span> username: {errors.user.username.message}</span>}
                </div>

                <div className="formElements">
                    <label>
                        Age:
                        <input
                            type="number"
                            {...register("user.age", { valueAsNumber: true })}
                        />
                    </label>
                    {errors.user?.age && <span>age: {errors.user.age.message}</span>}
                </div>

                <div className="formElements">
                    <label>
                        Contact No.:
                        <input
                            type="text"
                            {...register("user.contactno")}
                        />
                    </label>
                    {errors.user?.contactno && <span>contactno: {errors.user.contactno.message}</span>}
                </div>

                <h3>Activities:</h3>

                {activities.map((activity, index) => (
                    <div key={index} className="activityDiv">

                        <div className="formElements">
                            <label className="textareaLabel">
                                Activity Description:
                                <textarea
                                    {...register(`activities.${index}.description`)}
                                    rows={5}
                                    cols={20}
                                />
                            </label>
                            {errors.activities?.[index]?.description &&
                                <span>
                                    description: {errors.activities?.[index]?.description?.message ?? ''}
                                </span>
                            }
                        </div>

                        <div className="formElements">
                            <label>
                                Time Spent:
                                <input
                                    type="text"
                                    {...register(`activities.${index}.timespent`)}
                                />
                            </label>

                            {errors.activities?.[index]?.timespent &&
                                <span>
                                    timespent: {errors.activities?.[index]?.timespent?.message ?? ''}
                                </span>
                            }
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    className="addBtn"
                    onClick={addNewActivity}
                >
                    Add New Activity
                </button>
                <button type="submit" className="submitBtn">
                    Submit
                </button>
            </form>
        </div>
    );
}