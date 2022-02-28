function LanguageSwitcher (props) {
  return (
    <div className="px-6 pt-4">
        <label className="text-gray-500">{props.translation.sidebar.lang}:</label>
        <select onChange={(e)=>{props.handleChangeLanguage(e.target.value)}} className="mt-4 form-select appearance rounded w-full">
          {props.options.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
    </div>
  );
}

export default LanguageSwitcher;