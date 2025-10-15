import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"
import Title from "../components/Title";

function TaskPage() {

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const navigate = useNavigate();

    function onBackClick() {
        navigate(-1)
    }

    return (
        <div className="h-screen w-screen bg-green-800 p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button onClick={onBackClick} className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>
                    <Title>
                        Detalhes da tarefa
                    </Title>
                </div>


                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage