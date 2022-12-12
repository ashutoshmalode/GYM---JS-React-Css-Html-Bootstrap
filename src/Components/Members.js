import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import UserModal from "./UserModal";
import "./component.css";

function Members() {
  const [members, setMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onShowModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmitMember = (member) => {
    setMembers(members.concat(member));
  };


  return (
    <div className="members">
      <div className="accordion" id="accordionExample">
        <h1>All Members</h1>
        <br />
        <div>
          <button
            onClick={onShowModal}
            type="button"
            className="btn btn-primary"
          >
            Add Member
          </button>
        </div>

        <br />
        <Accordion>
          {members.map((member, index) => (
            <Accordion.Item key={`member-${index}`} eventKey={index}>
              <Accordion.Header>
                {index + 1} - {member.fullName}
              </Accordion.Header>
              <Accordion.Body>
                <div> Full Name: {member.fullName} </div>
                <div> Age: {member.age} </div>
                <div> Weight: {member.weight} </div>
                <div> Contact No: {member.contactNo} </div>
                <div> Monday: {member.monday} </div>
                <div> Tuesday: {member.tuesday} </div>
                <div> Wednesday: {member.wednesday} </div>
                <div> Thursday: {member.thursday} </div>
                <div> Friday: {member.friday} </div>
                <div> Saturday: {member.saturday} </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <UserModal
        isModalOpen={isModalOpen}
        onShowModal={onShowModal}
        onSubmitMember={handleSubmitMember}
      />
    </div>
  );
}

export default Members;
