import TemplateForm from "../template-form";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Template() {
  const [questionNumbers, setQuestionNumbers] = useState<number[]>([1]);
  const incrementQuestionNumber = () => {
    setQuestionNumbers((prev) => [...prev, prev.length + 1]);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (values: any) => {
    console.log("values => ", values);
  };

  return (
    <div className="my-3 d-flex gap-3 align-items-start">
      <form onSubmit={handleSubmit(onSubmit)} className="w-100">
        <div className="d-flex flex-column gap-3">
          <div className="card">
            <div className="card-body d-flex flex-column gap-2">
              <input
                {...register("title")}
                className="border-0 border-bottom h1"
                defaultValue={"Untitled form"}
              />
              <input
                {...register("description")}
                className="border-0 border-bottom"
                defaultValue={"Form description"}
              />
            </div>
          </div>
          {questionNumbers.map((questionNumber) => (
            <div className="card" key={questionNumber}>
              <div className="card-body">
                <TemplateForm
                  questionNumber={questionNumber}
                  register={register}
                />
              </div>
            </div>
          ))}
        </div>
      </form>

      <div>
        <div className="card">
          <div className="card-body d-flex flex-column gap-3">
            <button className="btn p-0" onClick={incrementQuestionNumber}>
              <FiPlusCircle size={24} title="Add question" />
            </button>
            <button className="btn p-0">
              <MdOutlinePhotoSizeSelectActual size={22} title="Add image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
