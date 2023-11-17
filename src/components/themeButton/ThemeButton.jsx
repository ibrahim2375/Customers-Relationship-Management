//css style
import "./ThemeButton.css";
function ThemeButton(toggleTheme) {
  return (
    <label className="ui-switch">
      <input type="checkbox" onChange={(e) => toggleTheme(e)} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
}

export default ThemeButton;
