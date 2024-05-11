export enum SupportedLang {
    English='en',
    German='de',
    Spanish='es',
    French='fr',
    Portuguese='pt'
}

type CacheType = { [key in SupportedLang]:{[key:string]:string}};
type TranslateRes = { translatedText: string, textLocale: SupportedLang};

const _userLocaleKey = 'userLocale';
const _localeLangCache = 'localeLangCache';
let _cache:CacheType = {} as CacheType;

const translateHelper = async (text:string, to:SupportedLang):Promise<TranslateRes>=> {
    let retText:TranslateRes = { translatedText: text, textLocale: to };

    if (to === SupportedLang.English || !text) return retText;
    if (!_cache[to]) _cache[to] = {};
    if (_cache[to][text]) {
        retText.translatedText = _cache[to][text];
        return retText;
    }

    retText.translatedText = '(' + to + ') [' + text + ']';
    const res = await fetch("http://localhost:5000/translate", {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: SupportedLang.English,
            target: to,
            format: "text",
            api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
    });

    retText.translatedText = (await res.json()).translatedText;

    _cache[to][text] = retText.translatedText;
    saveCache();
    return retText;
}

const saveCache = () =>{
    localStorage.setItem(_localeLangCache, JSON.stringify(_cache));
};

export const getLocale = ():SupportedLang => {
    let currLocale = localStorage.getItem(_userLocaleKey) as SupportedLang;
    if (!Object.values(SupportedLang).includes(currLocale)) currLocale = SupportedLang.English;

    let localeCache = localStorage.getItem(_localeLangCache);
    if (localeCache) _cache = JSON.parse(localeCache) as CacheType;
    else _cache[currLocale] = {};

    return currLocale
};

export const saveLocale = (newLocale:SupportedLang) => {
    if (!_cache[newLocale]) _cache[newLocale] = {};
    saveCache();

    if (!Object.values(SupportedLang).includes(newLocale)) {
        alert(newLocale + ' is not a supported language');
        newLocale = SupportedLang.English;
    }
    localStorage.setItem(_userLocaleKey, newLocale);
}

export const translate = async (text:string|string[], to:SupportedLang):Promise<TranslateRes> => {
    let stringText = '';
    if (!Array.isArray(text)) stringText = text;
    else {
        text.forEach(element => {
            stringText += element;
        });
    }
    return translateHelper(stringText||'', to);
};