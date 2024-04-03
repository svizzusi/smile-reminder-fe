import style from './ExistingPatientsSearch.module.css'

const ExistingPatientsSearch = () => {
  return (
    <div>
      <input
      className={style.existingPaitientsSearchInput}
        type="text"
        placeholder="Search..."
      />
    </div>
  )
};

export default ExistingPatientsSearch;
