import React from "react";
import "./ContactItem.css";

const ContactItem = ({ name, description, avatar }) => {
  return (
    <div class="row">
      <div class="col-8 d-block mx-auto">
        <div class="panel">
          <div class="panel-body p-t-10">
            <div class="media-main">
              <a class="pull-left" href="#">
                <img class="thumb-lg img-circle bx-s" src={avatar} alt="" />
              </a>
              <div class="pull-right btn-group-sm">
                <a
                  href="#"
                  class="btn btn-success tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Edit"
                >
                  <i class="fa fa-pencil"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-danger tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Delete"
                >
                  <i class="fa fa-close"></i>
                </a>
              </div>
              <div class="info">
                <h4>{name}</h4>
                <p class="text-muted">{description}</p>
              </div>
            </div>
            <div class="clearfix"></div>
            <hr />
            <ul class="social-links list-inline p-b-10">
              <li>
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  class="tooltips"
                  href="#"
                  data-original-title="Facebook"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  class="tooltips"
                  href="#"
                  data-original-title="Twitter"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  class="tooltips"
                  href="#"
                  data-original-title="LinkedIn"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  class="tooltips"
                  href="#"
                  data-original-title="Skype"
                >
                  <i class="fa fa-skype"></i>
                </a>
              </li>
              <li>
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  class="tooltips"
                  href="#"
                  data-original-title="Message"
                >
                  <i class="fa fa-envelope-o"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
