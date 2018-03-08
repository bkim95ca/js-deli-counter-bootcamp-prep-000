var katzDeliLine[];
var name;
function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name);
    return `Welcome, ${name}. You are number {katzDeliLine.length} in line.`;
}