import { reportHeader } from "../utils/constants";
import { translate } from "../utils/translation";
import { SupportedLang, getLocale, changeLocale } from "../utils/translation";

const styles = {
    container: {
        backgroundColor: "#064c60",
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "space-between",
        padding: "1rem",
        width: "100%",
    },
    logo: {
        width: "10rem",
    },
    secondaryText: {
        color: "#fff",
    },
};

const ReportHeader = () => {
    return (
        <div style={styles.container}>
            <img
                alt="Logo"
                src={require("../static/logo.png")}
                style={styles.logo}
            />
            <span style={styles.secondaryText} translate="yes">
                {translate(reportHeader.secondaryText)}
            </span>
            <select id="languages" name="languages" onChange={(e)=>{changeLocale(e.target.value as SupportedLang); window.location.reload();}}>
                <option value={SupportedLang.English} selected={getLocale()==SupportedLang.English}>English</option>
                <option value={SupportedLang.German} selected={getLocale()==SupportedLang.German}>German</option>
                <option value={SupportedLang.Spanish} selected={getLocale()==SupportedLang.Spanish}>Spanish</option>
                <option value={SupportedLang.French} selected={getLocale()==SupportedLang.French}>French</option>
                <option value={SupportedLang.Portuguese} selected={getLocale()==SupportedLang.Portuguese}>Portuguese</option>
            </select>
        </div>
    );
};

export default ReportHeader;
