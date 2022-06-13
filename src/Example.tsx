import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { useCoreService } from "./modules/core/services/Core.service";
// import "antd/dist/antd.less";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "maplibre-gl/dist/maplibre-gl.css";
import "antd/dist/antd.css";
import { getDefaultSettings } from "http2";
import { isDate } from "util/types";
import { useState } from "react";
import { Divider, Modal } from "antd";
import Input from "antd/lib/input/Input";

function Example() {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [viewMessage, setviewMessage] = useState("");
  const [hourMessage, setHourMessage] = useState(-1);
  let hour = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ];
  let todaysDate = new Date();
  // console.log("todaysDate", todaysDate);

  let hourView = () => {
    let allHour = hour.map((currentHour) => {
      return (
        <>
          <Divider />
          <div className="m-2 flex cursor-pointer">
            <h3
              onClick={() => {
                setviewMessage("");
                setHourMessage(currentHour);
                setModalVisible(true);
              }}
            >
              Time : {currentHour}00 hours
            </h3>
            {hourMessage === currentHour ? (
              <div>
                {viewMessage.length > 0 ? (
                  <span className="mx-4 bg-gray-200 px-4 cursor-pointer">
                    {viewMessage} between {currentHour} - {currentHour + 1}
                    <p
                      className=" px-8"
                      onClick={() => {
                        setviewMessage("");
                      }}
                    >
                      {" "}
                      del
                    </p>
                  </span>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
          <Divider />
        </>
      );
    });
    return allHour;
  };

  return (
    <>
      <div>
        <div className="px-4">{hourView()}</div>
        <Modal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onOk={() => {
            setviewMessage(message);
            setModalVisible(false);
          }}
          // type={"info"}
        >
          <div className="m-2">
            <h3>Add Event</h3>
            <Input
              onChange={(e: any) => {
                setMessage(e.target.value);
              }}
              placeholder="type event"
            ></Input>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Example;
