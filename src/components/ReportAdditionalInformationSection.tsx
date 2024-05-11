import InputTag from "./InputTag";
import { generateXrayAnalysisSummary } from "../utils/strings";
import { Translate } from './ui/translate'

const styles = {
    title: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 600,
        paddingRight: "10%",
        alignSelf: "center",
        justifyCenter: "center",
        alignText: "center",
    },
};

const ReportAdditionalInformationSection = () => {
    return (
        <div translate="yes">
            <Translate style={styles.title}>Summary: </Translate>
            <InputTag editable={true}>{generateXrayAnalysisSummary()}</InputTag>
        </div>
    );
};

export default ReportAdditionalInformationSection;
