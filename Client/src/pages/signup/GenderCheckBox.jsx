const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-4 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className="label-text text-white">Male</span>
          <input 
            type="checkbox" 
            className="checkbox text-white border-slate-900" 
            checked={selectedGender === 'male'} 
            onChange={() => onCheckboxChange('male')} 
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white">Female</span>
          <input 
            type="checkbox" 
            className="text-white checkbox border-slate-900" 
            checked={selectedGender === 'female'} 
            onChange={() => onCheckboxChange('female')} 
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
