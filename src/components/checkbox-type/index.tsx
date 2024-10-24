import { MdClear } from "react-icons/md";
import { useState } from "react";

interface CheckboxTypeProps {
  questionNumber: number;
  register: any;
}

export default function CheckboxType({
  questionNumber,
  register,
}: CheckboxTypeProps) {
  const [optionLength, setOptionLength] = useState<any[]>([1]);
  const [isOther, setIsOther] = useState<boolean>(false);

  const addOption = () => {
    const newOpt = [...optionLength, optionLength.length + 1];
    setOptionLength(newOpt);
  };
  const deleteOption = (opt: number | string) => {
    const newOpt = optionLength.filter((option) => option !== opt);
    setOptionLength(newOpt);
  };
  const toggleOther = () => setIsOther(!isOther);

  return (
    <>
      {optionLength.map((option: number | string, index) => (
        <div className="d-flex w-100 gap-2 justify-content-between" key={index}>
          <div>
            <input type="checkbox" className="form-check-input" disabled />{" "}
            <input
              defaultValue={`Option ${option}`}
              {...register(`question-${questionNumber}-option-${option}`)}
              className="border-0 border-bottom"
            />
          </div>
          {optionLength.length > 1 && (
            <MdClear onClick={() => deleteOption(option)} />
          )}
        </div>
      ))}
      {isOther && (
        <div className="d-flex w-100 gap-2 justify-content-between">
          <div>
            <input type="checkbox" className="form-check-input" disabled />{" "}
            <input
              defaultValue={`Other`}
              {...register(`question-${questionNumber}-option-other`)}
              className="border-0 border-bottom"
              disabled
            />
          </div>
          {optionLength.length > 1 && <MdClear onClick={toggleOther} />}
        </div>
      )}

      <div className="d-flex align-items-center">
        <input type="checkbox" className="form-check-input" disabled />
        <button className="btn btn-sm" onClick={addOption}>
          Add option
        </button>
        {!isOther && (
          <>
            or
            <button className="btn btn-sm text-primary" onClick={toggleOther}>
              add "Other"
            </button>
          </>
        )}
      </div>
    </>
  );
}
