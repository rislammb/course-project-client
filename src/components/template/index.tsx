import TemplateForm from "../template-form";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlinePhotoSizeSelectActual, MdTitle } from "react-icons/md";
import { TbFileImport } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

export default function Template() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "Untitled form",
      description: "Form description",
    },
  });
  const onSubmit = () => {};

  return (
    <div className="my-3 d-flex gap-3 align-items-start">
      <div className="d-flex flex-column gap-3">
        <div className="card ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body d-flex flex-column gap-2"
          >
            <input
              {...register("title")}
              className="border-0 border-bottom h1"
            />
            <input
              {...register("description")}
              className="border-0 border-bottom"
            />
          </form>
        </div>
        <div className="card ">
          <div className="card-body">
            <TemplateForm />
          </div>
        </div>
        <div className="card ">
          <div className="card-body">
            <TemplateForm />
          </div>
        </div>
      </div>

      <div>
        <div className="card">
          <div className="card-body d-flex flex-column gap-3">
            <button className="btn p-0">
              <FiPlusCircle size={24} title="Add question" />
            </button>
            <button className="btn p-0">
              <TbFileImport size={24} title="Import questions" />
            </button>
            <button className="btn p-0">
              <MdTitle size={26} title="Add title and description" />
            </button>
            <button className="btn p-0">
              <MdOutlinePhotoSizeSelectActual size={22} title="Add image" />
            </button>
            <button className="btn p-0">
              <RiYoutubeLine size={26} title="Add video" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
