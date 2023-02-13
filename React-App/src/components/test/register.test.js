import {passValidation} from '../register'


const charactersValidation = (string) => {

    var flag = 0
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const specialChar = ['.', '_', '-', '#', '@', '*', '/', '?', '¿', '&']

    for (const key in string) {
        let letter = string[key]
        if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 123) {
            flag = 1
            break
        }
    }

    if (!flag) return flag

    for (const key in specialChar) {
        if (string.includes(specialChar[key])) {
            flag = 1
            break
        } else {
            flag = 0
        }
    }

    if (!flag) return flag

    for (const key in num) {
        if (string.includes(num[key])) {
            flag = 1
            break
        } else {
            flag = 0
        }
    }
    return flag

}

describe('funciones dentro del Registro', () => {
    
    describe('passValidation', () => {
      
        test('Debe retornar un false', () => {
            
            const result = passValidation('arnoldo', 'arnoldo', charactersValidation);
            expect(result).toBe(false)
        });

        test('Debe retornar un false', () => {
            
            const result = passValidation('arnoldogonzalez', 'arnoldogonzalez', charactersValidation);
            expect(result).toBe(false)
        });

        test('Debe retornar un false', () => {
            
            const result = passValidation('arnoldogon05@', 'arnoldogon05@.', charactersValidation);
            expect(result).toBe(false)
        });

        test('Debe retornar un True', () => {
            
            const result = passValidation('arnoldogon05@', 'arnoldogon05@', charactersValidation);
            expect(result).toBe(true)
        });
    })
})

