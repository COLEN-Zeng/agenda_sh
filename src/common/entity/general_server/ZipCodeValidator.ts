export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string, f) {
        f(this);
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
