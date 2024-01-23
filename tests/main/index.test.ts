import { maxArea } from "../../src/index";

describe('maxArea functionality',() => {     
    it('should handle the minimum input arguments', () => { 
        expect(maxArea([1,1])).toBe(1);
    });      
    it('should handle the minimum input value', () => { 
        expect(maxArea([0,0,1])).toBe(0);
    });      
    it('should handle the maximum input arguments and value', () => { 
        const height = Array.from({ length: 104 }, () => 104);
        expect(maxArea(height)).toBe(10712);
    });      
    it('should NOT calculate the max area if the number of arguments is less than 2', () => { 
        expect(maxArea([1])).toBe(0);
    }); 
    it('should NOT calculate the max area if the number of arguments is greater than 105', () => { 
        const height = Array.from({ length: 106 }, () => 50);
        console.log(height.length);
        expect(maxArea(height)).toBe(0);
    });         
    it('should NOT calculate the max area if the value of an argument is greater than 104', () => { 
        expect(maxArea([10,20,200])).toBe(0);
    }); 

    it('should calculate the max area between two buildings - simple heights', () => { 
        expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
    }); 

    it('should calculate the max area between two buildings - complex heights', () => { 
        expect(maxArea([1,38,65,55,100,55,2,39,5,4,34,8,3,12,5,81,77,102,13,3,7])).toBe(1300);
    }); 
});