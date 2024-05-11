import { ReactNode, CSSProperties, useState, useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import { translate } from '../../utils/translation';


interface TranslateProps {
    editable?: boolean;
    children?: string | string[] | ReactNode;
    style?: CSSProperties;
}

export const Translate = (props:TranslateProps) => {
    const {locale} = useContext(AppContext);
    const [content, setContent] = useState(props.children);

    useEffect(()=>{
        setContent(props.children);
        if (typeof(props.children) === 'string' || Array.isArray(props.children)) {
            translate(props.children, locale).then((translateRes)=>{
                if (locale === translateRes.textLocale) setContent(translateRes.translatedText);
            });
        }
    }, [locale, props.children])

    return <span style={props.style}>{content}</span>
}