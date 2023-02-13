import { render } from "@testing-library/react";
import {validar} from "../login";

describe('funciones dentro del Login', () => {
    
    describe('enviarDatos', () => {
      
        test('Debe retornar un objeto', () => {
            
            const result = validar();
            expect(typeof result).toBe("object")
        });
    })
})
