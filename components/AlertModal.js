// create an alert modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function AlertModal() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)}>Small modal</Button>{" "}
      <Modal
        //   size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">w</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <div className="flex flex-col">
            <div className="text-xs">Current Price: 78{}</div>
            <div className="text-xs">Alert me when:{}</div>
            <div className="">
              <label className="font-medium text-sm">Price reaches the Trigger Price:</label>
              <div className="border-1 flex flex-row w-min">
                <span className="text-black">₹</span>
                <input
                  type="number"
                  step="any"
                  name="triggerPrice"
                  className="pl-8"
                  id="triggerPrice"
                  min="0"
                  data-state="triggerPrice"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div className="c-">
              <label htmlFor="stepPrice" className="c-formField__label">
                Notify me again after a rise of every:
              </label>
              <div className="">
                <input
                  type="number"
                  step="any"
                  name="stepPrice"
                  min="0"
                  className="c-input__text c-input--max300 pl-8"
                  id="stepPrice"
                  data-state="stepPrice"
                  required=""
                  value=""
                />
                <span className=" text-lightGray">₹</span>
              </div>
            </div>
            <button className="border-1 border-black" disabled="" form="setPriceAlert__inr">Set Alert</button>
          </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AlertModal;
