import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./component.css";

function UserModal({ isModalOpen, onShowModal, onSubmitMember }) {
  const modalData = {
    fullName: "",
    age: "",
    weight: "",
    contactNo: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
  };

  const [member, setMember] = useState(modalData);

  const handleAddMember = () => {
    onShowModal();
    onSubmitMember(member);
    setMember(modalData);
  };

  const saveUserInfo = (key, value) => {
    setMember({ ...member, [key]: value });
  };

  return (
    <Modal className="modal" show={isModalOpen} onHide={onShowModal}>
      <Modal.Header closeButton>
        <Modal.Title className="membersInfo">Members Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>
          <form>
            <div>
              <span>
                <h4>Full Name</h4>
                <input
                  value={member.fullName}
                  onChange={(e) => saveUserInfo("fullName", e.target.value)}
                  type="text"
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Age</h4>
                <input
                  value={member.age}
                  onChange={(e) => saveUserInfo("age", e.target.value)}
                  type="number"
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Weight</h4>
                <input
                  value={member.weight}
                  onChange={(e) => saveUserInfo("weight", e.target.value)}
                  type="number"
                />
              </span>
            </div>
            <div>
              <span>
                <h4>Contact No</h4>
                <input
                  value={member.contactNo}
                  onChange={(e) => saveUserInfo("contactNo", e.target.value)}
                  type="number"
                />
              </span>
            </div>
            <br />
            <h3 className="membersInfo">
              <i>Exercises:-</i>
            </h3>
            <div>
              <span>
                <h4>Monday</h4>
                <div>
                  <select
                    tname="test"
                    size="1"
                    onChange={(e) => saveUserInfo("monday", e.target.value)}
                  >
                    <option>Back</option>
                    <option>Biceps</option>
                    <option>Chest</option>
                    <option>Triceps</option>
                    <option>Shoulder</option>
                    <option>Leg</option>
                  </select>
                </div>
              </span>
              <br />
              <span>
                <h4>Tuesday</h4>
                <div>
                  <select
                    tname="test"
                    size="1"
                    onChange={(e) => saveUserInfo("tuesday", e.target.value)}
                  >
                    <option>Back</option>
                    <option>Biceps</option>
                    <option>Chest</option>
                    <option>Triceps</option>
                    <option>Shoulder</option>
                    <option>Leg</option>
                  </select>
                </div>
              </span>
              <br />
              <span>
                <h4>Wednesday</h4>
                <div>
                  <select
                    tname="test"
                    size="1"
                    onChange={(e) => saveUserInfo("wednesday", e.target.value)}
                  >
                    <option>Back</option>
                    <option>Biceps</option>
                    <option>Chest</option>
                    <option>Triceps</option>
                    <option>Shoulder</option>
                    <option>Leg</option>
                  </select>
                </div>
              </span>
              <br />
              <span>
                <h4>Thursday</h4>
                <div>
                  <select
                    tname="test"
                    size="1"
                    onChange={(e) => saveUserInfo("thursday", e.target.value)}
                  >
                    <option>Back</option>
                    <option>Biceps</option>
                    <option>Chest</option>
                    <option>Triceps</option>
                    <option>Shoulder</option>
                    <option>Leg</option>
                  </select>
                </div>
              </span>
              <br />
              <span>
                <h4>Friday</h4>
                <div>
                  <select
                    tname="test"
                    size="1"
                    onChange={(e) => saveUserInfo("friday", e.target.value)}
                  >
                    <option>Back</option>
                    <option>Biceps</option>
                    <option>Chest</option>
                    <option>Triceps</option>
                    <option>Shoulder</option>
                    <option>Leg</option>
                  </select>
                </div>
              </span>
              <br />
              <span>
                <h4>Saturday</h4>
                <div>
                  <select
                    tname="test"
                    size="1"
                    onChange={(e) => saveUserInfo("saturday", e.target.value)}
                  >
                    <option>Back</option>
                    <option>Biceps</option>
                    <option>Chest</option>
                    <option>Triceps</option>
                    <option>Shoulder</option>
                    <option>Leg</option>
                  </select>
                </div>
              </span>
            </div>
          </form>
        </label>{" "}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onShowModal}>
          Cancle
        </Button>
        <Button variant="primary" onClick={handleAddMember}>
          Add Member
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserModal;
