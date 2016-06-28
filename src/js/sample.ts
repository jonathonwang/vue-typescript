( () => {

  // Boolean
  let isDone: boolean = false;

  // Number
  let decimal: number = 5.3123;

  // String
  let color: string = 'Blue';

  let anything: any = '123';

  // Number Array
  let numberList: number[] = [1,2,3,4,5,6];
  let genNumberList: Array<number> = [1,2,3,4,5,7];
  let anyList: Array<any> = [1,'hello','world',2];

  // Tuple Array -- mixed array type
  let tupleArray: [string, number] = ['Hello',123];

  // Enum -- retrieves index of specified Color
  enum Color {Red, Green, Blue};
  let c: Color = Color.Green;

  // Any -- only to be used when working with existing js packages
  let anyDataType: any = 4;
  anyDataType = 'it could be a string';
  anyDataType = false // it could be a Boolean


  // Void - to be used when a function doesnt return data type
  function warnUser(): void {
    console.log('Void Return Value');
  }

  // Void Variable Assign -- only used for undefined and null values
  let voidValue: void = undefined // || null

  // Type Assertions
  let someValue: string = "this is a string";
  let strLength: number = (<string>someValue).length;

  interface Something {
    size:number;
    label:string;
  }

  const printLabel = (myObject: Something) => {
    console.log(myObject)
  }
  let myObj: Something = { size: 10, label: 'something' }
  printLabel(myObj);


} )();
