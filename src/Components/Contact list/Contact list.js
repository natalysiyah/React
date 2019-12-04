import React, { Fragment } from "react";
import "./Contact list.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ ContactList }) => {
  const contactItem = ContactList.map(item => {
    return (
      <ContactItem
        name={item.name}
        description={item.description}
        avatar={item.avatar}
      />
    );
  });

  return <Fragment>{contactItem}</Fragment>;
};

export default ContactList;
