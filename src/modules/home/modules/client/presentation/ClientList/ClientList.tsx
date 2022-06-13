import { Button, Checkbox, Table } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  clientUsersQuery,
  clientUsersStore,
} from "../../../../../core/states/clientListData";

type ClientListProps = {
  //
};

const ClientList: React.FC<ClientListProps> = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const listData = clientUsersQuery.getClientUserList();
  let clientlistData: any[] = [...listData];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (status: CheckboxChangeEvent, record: any) => (
        <div className=" justify-center">
          <Checkbox
            defaultChecked={record.status}
            onChange={(e: CheckboxChangeEvent) => {
              let statusData: any = clientlistData.map((item) => {
                if (
                  record.email === item.email &&
                  record.password === item.password
                ) {
                  return { ...item, status: e.target.checked };
                } else {
                  return " ";
                }
              });

              let newStatusData = statusData.filter(function (element: any) {
                return element !== undefined;
              });

              newStatusData.forEach((element: any) => {
                const itemIndex = clientlistData.findIndex(
                  (o) => o.id === element.id
                );
                if (itemIndex > -1) {
                  clientlistData[itemIndex] = element;
                } else {
                  // clientlistData = clientlistData.push(element);
                }
              });
              clientUsersStore.update({ clientUsers: clientlistData });
            }}
          ></Checkbox>
        </div>
      ),
    },
  ];

  const onMap = () => {
    navigate("/home/client/map");
  };

  return (
    <React.Fragment>
      <div>
        <h1 className="font-jost text-[22px] pt-2 font-semibold">
          {t("list.labels.list")}
        </h1>
        <div className="flex float-right my-2">
          <div className="flex">
            <div className="mx-2">
              <Button onClick={onMap}> {t("list.actions.map")}</Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate("/home/client/add");
                }}
              >
                {t("list.actions.add")}
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Table dataSource={clientlistData} columns={columns} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientList;
