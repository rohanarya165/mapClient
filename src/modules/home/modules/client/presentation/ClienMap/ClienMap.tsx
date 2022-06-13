import { Button } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import MapBoxMap from "../../../../../core/component/MapBoxMap";
import { isAdmin } from "../../../../../core/helpers/validations/isAdmin";

type ClienMapProps = {
  //
};

const ClienMap: React.FC<ClienMapProps> = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div>
        <h1 className="font-jost text-[22px] pt-2 mb-0 font-semibold">
          {t("map.labels.map")}
        </h1>
        <div className="flex W-full">
          {isAdmin() ? (
            <div className="my-2 flex">
              <Button
                onClick={() => {
                  navigate("/home/client/list");
                }}
              >
                {t("map.actions.list")}
              </Button>
              <div className="mx-2">
                <Button
                  onClick={() => {
                    navigate("/home/client/Add");
                  }}
                >
                  {t("map.actions.add")}
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="overflow-hidden">
          <MapBoxMap></MapBoxMap>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClienMap;
