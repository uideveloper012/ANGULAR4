interface inter_one
{
    sub_one:string;
    sub_two:string;
    sub_three:string;
}
var obj:inter_one=
    {
        "sub_one":"Angular",
        "sub_two":"NodeJS",
        "sub_three":"MongoDB"
    }
    document.write("<h1>"+obj.sub_one+"<==>"+obj.sub_two+"<==>"+obj.sub_three+"</h1>")
