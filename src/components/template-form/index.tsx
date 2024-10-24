import { useState } from "react";
import CheckboxType from "../checkbox-type";

interface TemplateFormProps {
  questionNumber: number;
  register: any
}

export default function TemplateForm({ questionNumber, register }: TemplateFormProps) {
  const [questionType, setQuestionType] = useState<string>("input");
  const handleQuestionType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuestionType(event.target.value);
  };
  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  // };

  const questionTypes = [
    { label: "Short text", value: "input" },
    { label: "Long text", value: "textarea" },
    { label: "Number", value: "number" },
    { label: "Checkbox", value: "checkbox" },
  ];

  return (
    <div
      className="d-flex flex-column gap-3"
    // onSubmit={handleSubmit}
    >
      <div className="d-flex gap-3">
        <input
          {...register(`question-${questionNumber}`)}
          type="text"
          className="w-100 border-0 border-bottom"
          defaultValue={"Untitled Question"}
        />
        <select
          {...register(`question-${questionNumber}-type`)}
          className="form-select w-auto"
          role="button"
          value={questionType}
          onChange={handleQuestionType}
        >
          {questionTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {questionType === "checkbox" ? (
        <CheckboxType questionNumber={questionNumber} register={register} />
      ) : (
        <input
          type="text"
          className={`border-0 border-bottom ${questionType === "textarea"
            ? "w-100"
            : questionType === "number"
              ? "w-25"
              : "w-50"
            }`}
          placeholder={
            questionType === "textarea"
              ? "Long answer text"
              : questionType === "number"
                ? "Number"
                : "Short answer text"
          }
          disabled
        />
      )}
    </div>
  );
}
