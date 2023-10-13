radius=[1,2,3,4]
area=function(radius)
{
    return Math.PI*radius*radius
}
cicumference=function(radius)
{
    return Math.PI*2*radius
}

output=[]

Array.prototype.calculate=function(logic,radius)

{
    for (i of radius)
    {
        output.push(logic(i))
    }
    return output
}

console.log(radius.calculate(area,radius))