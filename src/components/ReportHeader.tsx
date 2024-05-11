import { useContext } from "react";
import { reportHeader } from "../utils/constants";
import { Translate } from './ui/translate'
import { SupportedLang } from "../utils/translation";
import { AppContext } from "../App";

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

    const {locale, setLocale} = useContext(AppContext);

    return (
        <div style={styles.container}>
            <img
                alt="Logo"
                src={require("../static/logo.png")}
                style={styles.logo}
            />
            <Translate style={styles.secondaryText}>
                {reportHeader.secondaryText}
            </Translate>
            <select id="languages" name="languages" onChange={(e)=>setLocale(e.target.value as SupportedLang)} defaultValue={locale}>
                <option value={SupportedLang.English}>English</option>
                <option value={SupportedLang.German}>German</option>
                <option value={SupportedLang.Spanish}>Spanish</option>
                <option value={SupportedLang.French}>French</option>
                <option value={SupportedLang.Portuguese}>Portuguese</option>
            </select>
        </div>
    );
};

export default ReportHeader;
