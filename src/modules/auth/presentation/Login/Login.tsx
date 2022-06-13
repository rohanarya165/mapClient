import * as React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import FormLabelTemplate from "../../../core/modules/templates/FormTemplate";
import { useTranslation } from "react-i18next";

type LoginProps = {
  onSubmit: Function;
};

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { t } = useTranslation();
  const { onSubmit } = props;
  const [checkValue, setCheckValue] = React.useState(false);

  const onFinish = (formData: any) => {
    onSubmit(formData, checkValue);
  };

  const checkHandler = () => {
    setCheckValue(!checkValue);
  };

  const onFinishFailed = (errorInfo: any) => {
    //
  };

  return (
    <div className="bg-slate-200 h-screen">
      <div className="grid place-items-center h-full">
        <div className="container w-full mx-auto flex justify-center items-center ">
          <div className="xl:w-2/6 lg:w-5/12 w-5/12 bg-white rounded-[8px] shadow-2xl ">
            <div className="flex justify-center pt-8 pb-6 xl:pt-4 xl:mt-4 "></div>
            <div className="m-6 xl:m-5 lg:m-4">
              <h1 className="text-zinc-700 text-[28px] lg:text-[24px] xl:text-[26px] font-semibold my-[12px] xl:my-[6px] lg:my-[6px] text-center font-jost mt-8">
                {t("auth.labels.login")}
              </h1>
              <p className="text-zinc-700 text-center font-jost mb-[40px] xl:mb-[4px] lg:mb-[4px] text-[20px] lg:text-[14px] xl:text-[15px]"></p>

              <Form
                name="login"
                labelCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="">
                  <Form.Item
                    label={
                      <FormLabelTemplate
                        keylabel={t("auth.formLabels.email")}
                      ></FormLabelTemplate>
                    }
                    className="font-medium font-roboto"
                    name={"email"}
                    rules={[
                      {
                        required: true,
                        message: t("auth.validations.enterEmail"),
                      },
                      {
                        type: "email",
                        message: t("auth.validations.emailValid"),
                      },
                    ]}
                  >
                    <Input placeholder={t("auth.validations.enterEmail")} />
                  </Form.Item>
                </div>
                <div className="">
                  <Form.Item
                    label={
                      <FormLabelTemplate
                        keylabel={t("auth.formLabels.password")}
                      ></FormLabelTemplate>
                    }
                    name={"password"}
                    className="font-medium font-roboto"
                    rules={[
                      {
                        required: true,
                        message: t("auth.validations.enterPassword"),
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder={t("auth.validations.enterPassword")}
                    ></Input.Password>
                  </Form.Item>
                </div>
                <Form.Item
                  name={"remember"}
                  valuePropName="checked"
                  className="align-left mb-[12px] xl:mb-[8px] lg:mb-[6px]"
                >
                  <div className="flex justify-between">
                    <div className="text-gray-400 font-roboto">
                      <Checkbox onChange={checkHandler} checked={checkValue}>
                        {t("auth.formLabels.rememberMe")}
                      </Checkbox>
                    </div>
                  </div>
                </Form.Item>
                <div className="flex justify-center">
                  <div>
                    <Form.Item>
                      <Button
                        // type="primary"
                        htmlType="submit"
                        loading={false}
                        // disable={isProcessing}
                      >
                        {t("auth.actions.login")}
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
