export enum SupportedLang {
    English='en',
    German='de',
    Spanish='es',
    French='fr',
    Portuguese='pt'
}

const _userLocaleKey = 'userLocale';
let _locale:SupportedLang = SupportedLang.English;

const initTranslation = () => {
    const userLocale = localStorage.getItem(_userLocaleKey);
    if (userLocale) _locale = userLocale as SupportedLang;
    else localStorage.setItem(_userLocaleKey, _locale);
};

const translateHelper = (text:string, to:SupportedLang):string=> {
    console.log(text);
    let retText:string = text;
    if (to != SupportedLang.English) retText = '(' + to + ') [' + text + ']';
    return retText;
}

export const getLocale = ():SupportedLang => { return _locale };

export const changeLocale = (to:SupportedLang) => {
    _locale = to;
    localStorage.setItem(_userLocaleKey, _locale);
}

export const translate = (text:any):string => {
    return translateHelper(text||'', _locale);
};


initTranslation();