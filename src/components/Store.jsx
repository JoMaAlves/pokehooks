import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Store = ({ items, money, onChange }) => (
  <>
    <h3 className="mb-4">Money: ${money}</h3>
    <div className="bg-secondary bg-gradient d-flex flex-column px-5 py-4 rounded shadow">
      {items.map((item, index) => (
        <div
          className="align-items-center d-flex flex-column justify-content-center mb-4"
          key={index}
        >
          <div className="align-items-center justify-content-between row">
            <img className="col" src={item.sprite} height={64} />
            <h4 className="col mb-0">{item.total}</h4>
          </div>

          <Form.Range
            onChange={onChange}
            max={Math.floor(money / item.cost) + item.total}
            name={item.name}
            type="number"
            value={item.total}
          />
        </div>
      ))}

      <h3 className="text-center mb-0">
        Total: $
        {items.reduce((prevValue, item) => {
          return prevValue + item.total * item.cost;
        }, 0)}
      </h3>
    </div>
  </>
);

Store.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      cost: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      sprite: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
  money: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Store;
