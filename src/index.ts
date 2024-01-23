export function maxArea(height: number[]): number {
    // Your code below:

    // verify constraints
    if(height.length < 2 || height.length > 105){
        return 0;
    }
    // if valid, calculate the volume for each item
    let buildingToSpacing = new Map<string,number>();
    let index:number = 0;
    let biggestArea:number = 0;
    let invalidValue:boolean = false;
    while(index < height.length) {
        let startBuilding:number = height[index];
        height.forEach((nextBuilding,currentIndex) => {
            if(nextBuilding > 104 || nextBuilding < 0){
                invalidValue = true;
            }
            let area = startBuilding > nextBuilding ? nextBuilding * (currentIndex-index) : startBuilding * (currentIndex-index);
            area = area < 0 ? area * -1 : area;
            if(area > biggestArea){
                biggestArea = area;
                // tag the largest area between two building
                buildingToSpacing.set(startBuilding.toString()+'-'+nextBuilding.toString(),biggestArea);
            }
        });
        // terminate the loop if an invalid argument was found
        if(invalidValue){
            return 0;
        }
        // console.log('biggestArea',biggestArea);
        index++;
    }
    
    let biggestAreas = Array.from(buildingToSpacing.values());
    // console.log('biggestAreas-key',buildingToSpacing.keys());
    // console.log('biggestAreas-value',biggestAreas);
    biggestAreas.sort();
    return biggestArea;
}

// console.log('maxArea-min args',maxArea([1]));
// console.log('maxArea-max args',maxArea([1,38,65,55,100,55,2,39,5,4,34,8,3,12,5,81,77,102,13,3,7]));
// console.log('maxArea-1',maxArea([1,8,6,2,5,4,8,3,7]));
// console.log('maxArea-2',maxArea([1,38,65,55,100,55,2,39,5,4,34,8,3,12,5,81,77,102,13,3,7]));