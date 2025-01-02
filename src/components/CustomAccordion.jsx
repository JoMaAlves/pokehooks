import PropTypes from 'prop-types';
import React from 'react';
import { Accordion } from 'react-bootstrap';

const CustomAccordion = ({ contentList }) => {
  return (
    <>
      {contentList.map((content, index) => (
        <React.Fragment key={index}>
          <h4>{content.title}</h4>

          <Accordion className="mb-4 shadow" key={index}>
            {content.items.map((item, contentIndex) => (
              <Accordion.Item eventKey={contentIndex} key={contentIndex}>
                <Accordion.Header>
                  <code>{item.name}</code>
                </Accordion.Header>
                <Accordion.Body className="text-light">
                  {item.description}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </React.Fragment>
      ))}
    </>
  );
};

CustomAccordion.propTypes = {
  contentList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.node,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default CustomAccordion;
