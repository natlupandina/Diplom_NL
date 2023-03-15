import { RegistrationForm } from "../registrationForm";

describe("NegativeTests", () => {
    let regForm: RegistrationForm;

    beforeAll(() => {
        regForm = new RegistrationForm('nat', '123', '', 0, false, false);
    });

    test("Invalid email", () => {
        expect(() => regForm.setEmail('nat')).toThrow(Error);
    });

    test("Invalid password", () => {
        expect(() => regForm.setPassword('123')).toThrow(Error);
    });

    test("Invalid username", () => {
        expect(() => regForm.setUsername('')).toThrow(Error);
    });

    test("Invalid age lower border", () => {
        expect(() => regForm.setAge(0)).toThrow(Error); 
    });

    test("Invalid age highier border", () => {
        expect(() => regForm.setAge(150)).toThrow(Error); 
    });

    test("registered wasn't set to true", () => {
        expect (regForm.register('Natal@com','12', '', 0, false)).toBeFalsy(); // как можно проверить метод registered на наличии каждого обязательного поля заполненным?  и что метод registered не установил переключатель в true
    });
})

describe("PositiveTests", () => {
    let regForm: RegistrationForm;

    beforeAll(() => {
        regForm = new RegistrationForm('natalia@gmail.com', 'NataliaRasada123', 'userNatalia', 18, false, true);
    });

    test("Valid email match regexp", () => {
        expect(regForm.setEmail('natalia@gmail.com')).toMatch(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
    });

    test("Valid password", () => {
        expect(regForm.setPassword('NataliaRasada123')).toMatch(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    });

    test("Password's lenght", () => {
        expect(regForm.setPassword('Natali33')).toHaveLength(8);
    });

    test("Password contains a number", () => {
        expect(regForm.setPassword('Natali33')).toContain('3');
    });

    test("Valid username", () => {
        expect(regForm.setUsername('userNatalia')).toBeTruthy;
    });

    test("Valid username with spaces", () => {
        expect(regForm.setUsername(' userNat ')).toBeTruthy;
    });

    test("Valid age lower border", () => {
        expect(regForm.setAge(1)).toBeGreaterThan(0);
    });

    test("Valid age higher border", () => {
        expect(regForm.setAge(149)).toBeLessThan(150);
    });

    test("agreeWithTermsTest", () => {
        expect(regForm.agreeWithTerms()).toBeTruthy();
    });

    test("register Set to True", () => {
        expect (regForm.register('natalia@gmail.com', 'NataliaRasada123', 'userNatalia', 18, true)).toBeTruthy(); // верно ли выбран мэтчер чтобы проверить что метод поставил true?
    });

    test("register contain date", () => {
        expect (regForm.register('natalia@gmail.com', 'NataliaRasada123', 'userNatalia', 18, true)).toBeInstanceOf(Date); // почему этот тест заваливается, не подходит мэтчер tobeInstanceOf?
    });
})
