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
    setOptionLength([...optionLength, optionLength.length + 1]);
  };
  const deleteOption = (opt: number | string) => {
    setOptionLength(optionLength.filter((option) => option !== opt));
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

      {(isOther ? optionLength.length < 3 : optionLength.length < 4) && (
        <div className="d-flex align-items-center">
          <input type="checkbox" className="form-check-input" disabled />
          <button type="button" className="btn btn-sm" onClick={addOption}>
            Add option
          </button>
          {!isOther && (
            <>
              or
              <button
                type="button"
                className="btn btn-sm text-primary"
                onClick={toggleOther}
              >
                add "Other"
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
