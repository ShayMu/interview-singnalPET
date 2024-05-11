import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import ReportHeader from "./components/ReportHeader";
import ReportPage from "./components/ReportPage";
import ReportSection from "./components/ReportSection";
import ReportBasicInfoSection from "./components/ReportBasicInfoSection";
import ReportAdditionalInformationSection from "./components/ReportAdditionalInformationSection";
import { additionalInformation } from "./utils/constants";
import { SupportedLang, getLocale, saveLocale } from "./utils/translation";

type AppContextType = {
    locale: SupportedLang,
    setLocale: (lang:SupportedLang)=>void
}

export const AppContext = createContext<AppContextType>({
    locale: SupportedLang.English,
    setLocale: ()=>{}
});

const styles = {
    wrapper: {
        backgroundColor: "#052e39",
        backdropFilter: "blur(2rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column" as "column",
        gapY: "2rem",
        height: "95%",
    },
};

function App() {
    const [locale, setLocale] = useState(getLocale());

    useEffect(()=>{
        saveLocale(locale);
    }, [locale])

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <AppContext.Provider value={{locale, setLocale}}>
                    <ReportHeader />
                    <ReportPage>
                        <ReportBasicInfoSection />
                    </ReportPage>
                    <ReportPage>
                        <ReportSection title={additionalInformation.title}>
                            <ReportAdditionalInformationSection />
                        </ReportSection>
                    </ReportPage>
                </AppContext.Provider>
            </div>
        </div>
    );
}

export default App;
