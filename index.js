function introduction(name) {
    return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introduction(Darren);
introductionWithLanguage(Darren, JavaScript);
introductionWithLanguageOptional(Darren, language); 