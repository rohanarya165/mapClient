import * as React from "react";
import { Form, Input, Button } from "antd";
import FormLabelTemplate from "../../../core/modules/templates/FormTemplate";
import { authQuery } from "../../../core/states/auth";
import { useTranslation } from "react-i18next";

type CreateNewPasswordProps = {
  passwordChange: Function;
};

const CreateNewPassword: React.FC<CreateNewPasswordProps> = (
  props: CreateNewPasswordProps
) => {
  const { passwordChange } = props;
  const { t } = useTranslation();
  let CurrentPassword = authQuery.getPassword();
  let CurrentEmail = authQuery.getUsername();
  const onFinish = (formData: any) => {
    let data = { ...formData, CurrentEmail };
    passwordChange(data);
  };

  const onFinishFailed = () => {
    //
  };

  return (
    <React.Fragment>
      <div>
        <div>
          <div className="p-4 bg-slate-200 h-screen">
            <div className="container mx-auto h-full flex justify-center items-center">
              <div className="xl:w-[35%] lg:w-[35%] w-[35%] bg-white rounded-[8px] shadow-2xl">
                <div className="flex justify-center p-4 xl:p-2 mt-6 xl:mt-4 lg:mt-3"></div>
                <div className="m-6 xl:m-5 lg:m-4">
                  <h1 className="text-zinc-900 text-[28px] lg:text-[24px] xl:text-[26px] font-bold my-[12px] xl:my-[6px] lg:my-[6px] text-center font-jost">
                    {t("change.labels.changePassword")}
                  </h1>
                  <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className=""
                  >
                    <div className="">
                      <Form.Item
                        className="font-medium text-[16px] font-roboto "
                        name={" "}
                        dependencies={["current_password"]}
                        label={
                          <FormLabelTemplate
                            keylabel={t("change.formLabels.current")}
                          ></FormLabelTemplate>
                        }
                        rules={[
                          {
                            required: true,
                            message: "Enter Password",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (CurrentPassword === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject("Enter Correct Password ");
                            },
                          }),
                        ]}
                        hasFeedback
                      >
                        <Input.Password placeholder={"Current Password"} />
                      </Form.Item>
                    </div>
                    <div className="">
                      <Form.Item
                        className="font-medium text-[16px] font-roboto"
                        name={"newPassword"}
                        label={
                          <FormLabelTemplate
                            keylabel={t("change.formLabels.new")}
                          ></FormLabelTemplate>
                        }
                        rules={[
                          {
                            required: true,
                            message: "Enter Password",
                          },
                          {
                            pattern: new RegExp(
                              "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&<>?/+=*_(){}:;,.~|-])(?=.{8,})"
                            ),
                            message:
                              "Password must be of 8 chars with 1 special, 1 num, 1 small & 1 capital",
                          },
                        ]}
                      >
                        <Input.Password placeholder={"new password"} />
                      </Form.Item>
                    </div>
                    <div className="">
                      <Form.Item
                        className="font-medium text-[16px] font-roboto"
                        name={"confirmPassword"}
                        dependencies={["newPassword"]}
                        label={
                          <FormLabelTemplate
                            keylabel={t("change.formLabels.confirm")}
                          ></FormLabelTemplate>
                        }
                        rules={[
                          {
                            required: true,
                            message: "Enter Password",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("newPassword") === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject("Enter Password as above");
                            },
                          }),
                        ]}
                      >
                        <Input.Password placeholder={"confirm password"} />
                      </Form.Item>
                    </div>
                    <div className="flex justify-center">
                      <Form.Item className="font-bold font-roboto">
                        <Button
                          htmlType="submit"
                          loading={false}
                          // disable={isProcessing}
                        >
                          {t("change.actions.update")}
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateNewPassword;
