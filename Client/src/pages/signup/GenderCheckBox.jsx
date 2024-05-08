
const GenderCheckBox = () => {
  return (
    <div className="flex">
        <div className="form-control"></div>
        <div>
            <label className="label gap-4 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>
        <div>
        <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox