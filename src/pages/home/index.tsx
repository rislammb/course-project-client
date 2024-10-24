import { useTranslation } from "react-i18next";
import Template from "../../components/template";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="container container-sm">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="questions-tab"
            data-bs-toggle="tab"
            data-bs-target="#questions-tab-pane"
            type="button"
            role="tab"
            aria-controls="questions-tab-pane"
            aria-selected="true"
          >
            {t("questions")}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="response-tab"
            data-bs-toggle="tab"
            data-bs-target="#response-tab-pane"
            type="button"
            role="tab"
            aria-controls="response-tab-pane"
            aria-selected="false"
          >
            {t("response")}
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="questions-tab-pane"
          role="tabpanel"
          aria-labelledby="questions-tab"
          tabIndex={0}
        >
          <Template />
        </div>
        <div
          className="tab-pane fade"
          id="response-tab-pane"
          role="tabpanel"
          aria-labelledby="response-tab"
          tabIndex={0}
        >
          {t("response")}
        </div>
        <div
          className="tab-pane fade"
          id="settings-tab-pane"
          role="tabpanel"
          aria-labelledby="settings-tab"
          tabIndex={0}
        >
          Settings
        </div>
      </div>
    </main>
  );
}
