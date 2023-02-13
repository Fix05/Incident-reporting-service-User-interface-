import {validateFields} from '../report/report'


describe('Validación de campos', () => {
  
    test('Debe retornar falso', () => {

        const details={detail:'', comment:''}
      
        const result = validateFields(details)
        expect(result).toBe(false)
    })

    test('Debe retornar falso', () => {

        const details={detail:'Hace dos días', comment:''}
      
        const result = validateFields(details)
        expect(result).toBe(false)
    })

    test('Debe retornar verdadero', () => {

        const details={detail:'Hace dos días', comment:'kkk'}
      
        const result = validateFields(details)
        expect(result).toBe(true)
    })

    test('Debe retornar falso', () => {

        const details={detail:'', comment:'kkk'}
      
        const result = validateFields(details)
        expect(result).toBe(false)
    })
    

})
