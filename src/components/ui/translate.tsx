import { ReactNode, CSSProperties, useState } from 'react';


interface TranslateProps {
    editable?: boolean;
    children?: string | string[] | ReactNode;
    style?: CSSProperties;
}

export const Translate = (props:TranslateProps) => {
    const [content, setContent] = useState(props.children);

    

    return <span style={props.style}>{content}</span>
}