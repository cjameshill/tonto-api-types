/**
 * Represents the duration in the format of `h:mm:ss` or `mm:ss`.
 */
export type Duration = `${number}:${number}:${number}` | `${number}:${number}`;

/**
 * Represents the user's liked status, where 0 represents false and 1 represents true.
 */
export type Liked = 0 | 1;

/**
 * The creation timestamp in ISO 8601 format (e.g., "2023-05-25T05:19:20.364Z").
 */
export type Timestamp = Date;

/**
 * The creation timestamp in epoch format (milliseconds).
 */
export type EpochTimestamp = number;

export enum YesNo {
    Yes = "yes",
    No = "no",
}

export enum Gender {
    male = "male",
    female = "female",
    notToSay = "not-to-say",
}

/**
 * Represents language codes using two-character lower-case codes.
 */
export enum Language {
    af = "af", // Afrikaans
    sq = "sq", // Albanian
    am = "am", // Amharic
    ar = "ar", // Arabic
    hy = "hy", // Armenian
    az = "az", // Azerbaijani
    eu = "eu", // Basque
    be = "be", // Belarusian
    bn = "bn", // Bengali
    bs = "bs", // Bosnian
    bg = "bg", // Bulgarian
    ca = "ca", // Catalan
    ceb = "ceb", // Cebuano
    ny = "ny", // Chichewa
    zh = "zh", // Chinese
    co = "co", // Corsican
    hr = "hr", // Croatian
    cs = "cs", // Czech
    da = "da", // Danish
    nl = "nl", // Dutch
    en = "en", // English
    eo = "eo", // Esperanto
    et = "et", // Estonian
    tl = "tl", // Filipino
    fi = "fi", // Finnish
    fr = "fr", // French
    fy = "fy", // Frisian
    gl = "gl", // Galician
    ka = "ka", // Georgian
    de = "de", // German
    el = "el", // Greek
    gu = "gu", // Gujarati
    ht = "ht", // Haitian Creole
    ha = "ha", // Hausa
    haw = "haw", // Hawaiian
    iw = "iw", // Hebrew
    hi = "hi", // Hindi
    hmn = "hmn", // Hmong
    hu = "hu", // Hungarian
    is = "is", // Icelandic
    ig = "ig", // Igbo
    id = "id", // Indonesian
    ga = "ga", // Irish
    it = "it", // Italian
    ja = "ja", // Japanese
    jv = "jv", // Javanese
    kn = "kn", // Kannada
    kk = "kk", // Kazakh
    km = "km", // Khmer
    rw = "rw", // Kinyarwanda
    ko = "ko", // Korean
    ku = "ku", // Kurdish
    ky = "ky", // Kyrgyz
    lo = "lo", // Lao
    la = "la", // Latin
    lv = "lv", // Latvian
    lt = "lt", // Lithuanian
    lb = "lb", // Luxembourgish
    mk = "mk", // Macedonian
    mg = "mg", // Malagasy
    ms = "ms", // Malay
    ml = "ml", // Malayalam
    mt = "mt", // Maltese
    mi = "mi", // Maori
    mr = "mr", // Marathi
    mn = "mn", // Mongolian
    my = "my", // Myanmar (Burmese)
    ne = "ne", // Nepali
    no = "no", // Norwegian
    or = "or", // Odia (Oriya)
    ps = "ps", // Pashto
    fa = "fa", // Persian
    pl = "pl", // Polish
    pt = "pt", // Portuguese
    pa = "pa", // Punjabi
    ro = "ro", // Romanian
    ru = "ru", // Russian
    sm = "sm", // Samoan
    gd = "gd", // Scots Gaelic
    sr = "sr", // Serbian
    st = "st", // Sesotho
    sn = "sn", // Shona
    sd = "sd", // Sindhi
    si = "si", // Sinhala
    sk = "sk", // Slovak
    sl = "sl", // Slovenian
    so = "so", // Somali
    es = "es", // Spanish
    su = "su", // Sundanese
    sw = "sw", // Swahili
    sv = "sv", // Swedish
    tg = "tg", // Tajik
    ta = "ta", // Tamil
    te = "te", // Telugu
    th = "th", // Thai
    tr = "tr", // Turkish
    uk = "uk", // Ukrainian
    ur = "ur", // Urdu
    uz = "uz", // Uzbek
    vi = "vi", // Vietnamese
    cy = "cy", // Welsh
    xh = "xh", // Xhosa
    yi = "yi", // Yiddish
    yo = "yo", // Yoruba
    zu = "zu", // Zulu
}

export enum LanguageName {
    Afrikaans = "Afrikaans",
    Albanian = "Albanian",
    Amharic = "Amharic",
    Arabic = "Arabic",
    Armenian = "Armenian",
    Azerbaijani = "Azerbaijani",
    Basque = "Basque",
    Belarusian = "Belarusian",
    Bengali = "Bengali",
    Bosnian = "Bosnian",
    Bulgarian = "Bulgarian",
    Catalan = "Catalan",
    Cebuano = "Cebuano",
    Chichewa = "Chichewa",
    Chinese = "Chinese",
    Corsican = "Corsican",
    Croatian = "Croatian",
    Czech = "Czech",
    Danish = "Danish",
    Dutch = "Dutch",
    English = "English",
    Esperanto = "Esperanto",
    Estonian = "Estonian",
    Filipino = "Filipino",
    Finnish = "Finnish",
    French = "French",
    Frisian = "Frisian",
    Galician = "Galician",
    Georgian = "Georgian",
    German = "German",
    Greek = "Greek",
    Gujarati = "Gujarati",
    HaitianCreole = "Haitian Creole",
    Hausa = "Hausa",
    Hawaiian = "Hawaiian",
    Hebrew = "Hebrew",
    Hindi = "Hindi",
    Hmong = "Hmong",
    Hungarian = "Hungarian",
    Icelandic = "Icelandic",
    Igbo = "Igbo",
    Indonesian = "Indonesian",
    Irish = "Irish",
    Italian = "Italian",
    Japanese = "Japanese",
    Javanese = "Javanese",
    Kannada = "Kannada",
    Kazakh = "Kazakh",
    Khmer = "Khmer",
    Kinyarwanda = "Kinyarwanda",
    Korean = "Korean",
    Kurdish = "Kurdish",
    Kyrgyz = "Kyrgyz",
    Lao = "Lao",
    Latin = "Latin",
    Latvian = "Latvian",
    Lithuanian = "Lithuanian",
    Luxembourgish = "Luxembourgish",
    Macedonian = "Macedonian",
    Malagasy = "Malagasy",
    Malay = "Malay",
    Malayalam = "Malayalam",
    Maltese = "Maltese",
    Maori = "Maori",
    Marathi = "Marathi",
    Mongolian = "Mongolian",
    MyanmarBurmese = "Myanmar (Burmese)",
    Nepali = "Nepali",
    Norwegian = "Norwegian",
    OdiaOriya = "Odia (Oriya)",
    Pashto = "Pashto",
    Persian = "Persian",
    Polish = "Polish",
    Portuguese = "Portuguese",
    Punjabi = "Punjabi",
    Romanian = "Romanian",
    Russian = "Russian",
    Samoan = "Samoan",
    ScotsGaelic = "Scots Gaelic",
    Serbian = "Serbian",
    Sesotho = "Sesotho",
    Shona = "Shona",
    Sindhi = "Sindhi",
    Sinhala = "Sinhala",
    Slovak = "Slovak",
    Slovenian = "Slovenian",
    Somali = "Somali",
    Spanish = "Spanish",
    Sundanese = "Sundanese",
    Swahili = "Swahili",
    Swedish = "Swedish",
    Tajik = "Tajik",
    Tamil = "Tamil",
    Telugu = "Telugu",
    Thai = "Thai",
    Turkish = "Turkish",
    Ukrainian = "Ukrainian",
    Urdu = "Urdu",
    Uzbek = "Uzbek",
    Vietnamese = "Vietnamese",
    Welsh = "Welsh",
    Xhosa = "Xhosa",
    Yiddish = "Yiddish",
    Yoruba = "Yoruba",
    Zulu = "Zulu",
}
