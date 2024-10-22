import { useState } from "react";
import { MdClear } from "react-icons/md";

interface TemplateFormProps {
  questionNumber: number;
}

export default function TemplateForm({ questionNumber }: TemplateFormProps) {
  const [questionType, setQuestionType] = useState<string>("text");
  const handleQuestionType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuestionType(event.target.value);
  };
  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  // };

  const questionTypes = [
    { label: "Short text", value: "text" },
    { label: "Long text", value: "textarea" },
    { label: "Number", value: "number" },
    { label: "Checkbox", value: "checkbox" },
  ];

  return (
    <div
      className="d-flex flex-column gap-3"
      // name={`question-${questionNumber}`}
      // onSubmit={handleSubmit}
    >
      <div className="d-flex gap-3">
        <input
          type="text"
          className="w-100 border-0 border-bottom"
          defaultValue={"Untitled Question"}
        />
        <select
          className="form-select w-auto"
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
        <>
          <div className="d-flex gap-2 justify-content-between align-items-center">
            <div>
              <input type="checkbox" className="form-check-input" disabled />{" "}
              <input
                defaultValue={"Option 1"}
                className="border-0 border-bottom"
              />
            </div>
            <MdClear />
          </div>
          <div>
            <input type="checkbox" className="form-check-input" disabled />{" "}
            <input
              defaultValue={"Add option"}
              className="border-0 border-bottom"
            />{" "}
            or <button className="btn btn-primary">add "Other"</button>
          </div>
        </>
      ) : (
        <input
          type="text"
          className={`border-0 border-bottom ${
            questionType === "textarea"
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
