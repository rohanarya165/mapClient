import { Button, Divider } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userQuery } from "../../../../../core/states/user";

type ClientProfileProps = {
  //
};

const ClientProfile: React.FC<ClientProfileProps> = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  let clientName = userQuery.getName();
  let clientEmail = userQuery.getEmail();
  let clientAddress = userQuery.getAddress();

  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <div>
        <div>
          <div className="">
            <div className="container mx-auto flex justify-center items-center">
              <div className="xl:w-[35%] lg:w-[35%] w-[35%] bg-white rounded-[8px] mt-8 shadow-2xl">
                <div className="flex justify-center p-4 "></div>
                <div className=" xl:m-5 lg:m-4">
                  <h1 className="text-zinc-900 text-[28px] lg:text-[24px] xl:text-[26px] font-bold my-[12px] xl:my-[6px] lg:my-[6px] text-center font-jost">
                    {t("profile.labels.profile")}
                  </h1>
                  <Divider></Divider>
                  <div className="flex justify-center">
                    <div>
                      <div className="flex">
                        <h3 className="font-jost text-[15px] p-2 font-semibold">
                          {t("profile.labels.name")}
                        </h3>
                        <h3 className="font-jost text-[15px] p-2 ">
                          {clientName}
                        </h3>
                      </div>
                      <div className="flex">
                        <h3 className="font-jost text-[15px] p-2 font-semibold">
                          {t("profile.labels.email")}
                        </h3>
                        <h3 className="font-jost text-[15px] p-2 ">
                          {clientEmail}
                        </h3>
                      </div>
                      <div className="flex">
                        <h3 className="font-jost text-[15px] p-2 font-semibold">
                          {t("profile.labels.address")}
                        </h3>
                        <h3 className="font-jost text-[15px] p-2 ">
                          {clientAddress}
                        </h3>
                      </div>
                      <p
                        className="cursor-pointer flex text-blue-700 p-2"
                        onClick={() => {
                          navigate("/createNewPassword");
                        }}
                      >
                        {t("profile.actions.changePassword")}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-4">
                      <Button onClick={cancelHandler}>
                        {t("profile.actions.back")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientProfile;
