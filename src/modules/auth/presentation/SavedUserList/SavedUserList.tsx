import * as React from "react";
import { useTranslation } from "react-i18next";

type SavedUserListProps = {
  setLoginScreen: Function;
  onDeleteUser: Function;
  onAutoLogin: Function;
  savedUserList: any;
};

const SavedUserList: React.FC<SavedUserListProps> = (
  props: SavedUserListProps
) => {
  const { onAutoLogin, savedUserList, onDeleteUser, setLoginScreen } = props;
  const { t } = useTranslation();
  const deleteUser = (user: any) => {
    onDeleteUser(user);
  };

  let savedUser;
  savedUser = savedUserList.map((user: any) => {
    return (
      <div className="h-[70px] hover:bg-gray-200 flex items-center cursor-pointer w-full">
        <span
          className="h-[70px] flex items-center w-full grow"
          onClick={() => {
            onAutoLogin(user);
          }}
        >
          <span className="bg-gray-400 rounded-[50%] hover:bg-transparent mx-[20px] p-2 "></span>
          <h3 className="text-center font-normal">{user.email}</h3>
        </span>

        <span className="w-[50px]">
          <span
            className="text-[15px] mx-[15px] inline float-right p-2"
            onClick={() => {
              deleteUser(user);
            }}
          >
            {t("savedUser.actions.delete")}
          </span>
        </span>
      </div>
    );
  });

  return (
    <div className="bg-slate-200 h-screen">
      <div className="grid place-items-center h-full">
        <div className="container w-full mx-auto flex justify-center items-center ">
          <div className="xl:w-2/6 lg:w-5/12 w-5/12 bg-white rounded-[8px] shadow-2xl">
            <div className="flex justify-center pt-8 xl:pt-4 pb-4 xl:mt-4 "></div>
            <div className="">
              <h1 className="text-zinc-700 text-[28px] lg:text-[24px] xl:text-[26px] font-semibold my-[12px] xl:my-[6px] lg:my-[6px] text-center font-jost mt-8">
                {t("savedUser.labels.pick")}
              </h1>
              <p className="text-zinc-700 text-center font-jost mb-[10px] xl:mb-[4px] lg:mb-[4px] text-[20px] lg:text-[14px] xl:text-[15px]">
                {t("savedUser.labels.enter")}
              </p>

              {savedUser}

              <div
                className="h-[70px]  hover:bg-gray-200 flex items-center mb-8 cursor-pointer"
                onClick={() => {
                  setLoginScreen(true);
                }}
              >
                <span className="text-[25px] bg-gray-400 rounded-[50%] hover:bg-transparent mx-[20px] p-2"></span>
                {t("savedUser.labels.another")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedUserList;
