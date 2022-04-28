import './Filter.css';

export const Filter = ({ value, onChange }) => (
  <>
    <label>
      <input
        className="inputFilter"
        type="text"
        placeholder="Search chat"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);
