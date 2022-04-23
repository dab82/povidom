export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        <input
          className="inputFilter"
          type="text"
          placeholder="Search chat"
          value={value}
          onChange={onChange}
          style={{ width: 300 }}
        />
      </label>
    </>
  );
};
