import * as React from "react";

type FormLabelTemplateProps = {
  keylabel: string;
  require?: boolean;
};

const FormLabelTemplate: React.FC<FormLabelTemplateProps> = (
  props: FormLabelTemplateProps
) => {
  const { keylabel, require } = props;
  return (
    <React.Fragment>
      <label
        {...props}
        className="required font-medium font-roboto text-[16px] lg:text-[13px] xl:text-[14px] "
      >
        {require && (
          <span className="mt-[6px] mr-[4px] text-[#ff4d4f] font-light text-[14px] font-SimSun inline-block leading-none">
            *
          </span>
        )}
        {keylabel}
      </label>
    </React.Fragment>
  );
};

export default FormLabelTemplate;
