import { Button, Checkbox, Divider, Form, Input, message } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import FormLabelTemplate from "../../../../../core/modules/templates/FormTemplate";
import { ClientVM } from "../../models/classes/ClientVM";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { ROLE_TYPE } from "../../../../../core/models/enums/core.enums";
import { clientUsersQuery } from "../../../../../core/states/clientListData";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

type ClientAddProps = {
  addClient: Function;
};

const Wrapper = styled.div`
  .react-mapbox-ac-input {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum", "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
  }
  .react-mapbox-ac-menu {
    width: auto;
    position: absolute;
    z-index: 9999;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-top: 0px;
  }
`;

const ClientAdd: React.FC<ClientAddProps> = (props: ClientAddProps) => {
  // const { REACT_MAPBOX_TOKEN } = process.env;
  const { addClient } = props;
  const { t } = useTranslation();
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const listData = clientUsersQuery.getClientUserList();
  const [status, setStatus] = React.useState(false);
  const [uniquEmail, setUniquEmail] = React.useState(true);
  const [address, setAdress] = React.useState("");
  const [lattitude, setLattitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [textAdd, setTextAdd] = React.useState("");

  const cancelHandler = () => {
    navigate(-1);
  };

  const mapAccess = {
    mapboxApiAccessToken:
      "pk.eyJ1Ijoiam9uc2VuIiwiYSI6IkR6UU9oMDQifQ.dymRIgqv-UV6oz0-HCFx1w",
  };

  function _suggestionSelect(result: any, lat: any, long: any, text: any) {
    setAdress(result);
    setLattitude(lat);
    setLongitude(long);
    setTextAdd(text);
  }

  const onFinish = (formData: ClientVM) => {
    console.log("address", address.length);
    let realAdress;
    if (address.length > 0) {
      realAdress = address;
    } else {
      realAdress = textAdd;
    }
    let data = {
      ...formData,
      status,
      role: ROLE_TYPE.CLIENT,
      address: realAdress,
      latitude: lattitude,
      longitude: longitude,
    };
    console.log(data);
    addClient(data);
    navigate("/home/client/list");
  };

  const onFinishFailed = () => {
    //
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    setStatus(e.target.checked);
  };

  const onChangeInputHandler = (e: any) => {
    setUniquEmail(true);
    listData.forEach((item) => {
      if (item.email === e.target.value) {
        message.error(t("add.validations.exist"));
        setUniquEmail(false);
      }
    });
  };

  return (
    <React.Fragment>
      <div>
        <div className="pageContainer">
          <h1 className="font-jost text-[22px] t-2 font-semibold">
            {t("add.labels.add")}
          </h1>
          <div className="flex w-1/2 px-2 items-center"></div>
          <div>
            <Form
              form={form}
              name={"client"}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              labelCol={{ span: 24 }}
              autoComplete="off"
              className=""
            >
              <div className="flex">
                <div className="w-1/3">
                  <div id="productCatecory" className="relative">
                    <Form.Item
                      name={"email"}
                      className="font-medium mb-2.5"
                      label={
                        <FormLabelTemplate
                          keylabel={t("auth.formLabels.email")}
                        ></FormLabelTemplate>
                      }
                      rules={[
                        {
                          required: true,
                          message: t("auth.validations.enterEmail"),
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (uniquEmail) {
                              return Promise.resolve();
                            }
                            return Promise.reject(t("add.validations.exist"));
                          },
                        }),
                      ]}
                    >
                      <Input
                        type={"email"}
                        onChange={onChangeInputHandler}
                      ></Input>
                    </Form.Item>
                  </div>
                  <div className="">
                    <Form.Item
                      name={"name"}
                      className="font-medium mb-2.5"
                      label={
                        <FormLabelTemplate
                          keylabel={t("add.formLabels.name")}
                        ></FormLabelTemplate>
                      }
                      rules={[
                        {
                          required: true,
                          message: t("add.validations.enterName"),
                        },
                        {
                          max: 100,
                          message: t("add.validations.onlyCharacters"),
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </div>
                <div className="w-1/3 pl-4">
                  <div className="relative" id="productAddState">
                    <Form.Item
                      name={"password"}
                      className="font-medium mb-2.5"
                      label={
                        <FormLabelTemplate
                          keylabel={t("auth.formLabels.password")}
                        ></FormLabelTemplate>
                      }
                      rules={[
                        {
                          required: true,
                          message: t("auth.validations.enterPassword"),
                        },
                        {
                          pattern: new RegExp(
                            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&<>?/+=*_(){}:;,.~|-])(?=.{8,})"
                          ),
                          message: t("add.validations.special"),
                        },
                      ]}
                    >
                      {<Input.Password type={"password"} />}
                    </Form.Item>
                  </div>
                  <div className="">
                    <div className="pb-[18px]">
                      <FormLabelTemplate
                        keylabel={t("add.formLabels.address")}
                      ></FormLabelTemplate>
                    </div>
                    <Wrapper>
                      <MapboxAutocomplete
                        publicKey={mapAccess.mapboxApiAccessToken}
                        inputClass="form-control search"
                        onSuggestionSelect={_suggestionSelect}
                        country="in"
                        resetSearch={false}
                        placeholder="Search Address..."
                      ></MapboxAutocomplete>
                    </Wrapper>
                  </div>
                  <div className="relative pt-4" id="productMaritalStatus">
                    <Checkbox onChange={onChange}></Checkbox>
                    <FormLabelTemplate
                      keylabel={t("add.formLabels.status")}
                    ></FormLabelTemplate>
                  </div>
                </div>
              </div>

              <Divider className="mt-4 mb-2" />
              <div className="flex mx-2">
                <div className="flex w-1/2 px-2"></div>
                <div className="w-1/2 px-2 my-2">
                  <div className="flex float-right ">
                    <div className="mr-2">
                      <Button onClick={cancelHandler}>
                        {t("add.actions.cancel")}
                      </Button>
                    </div>
                    <div className="">
                      <Button type="primary" htmlType="submit" loading={false}>
                        {t("add.actions.submit")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientAdd;
