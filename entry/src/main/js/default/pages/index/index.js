
export default {
    data: {
        operator: "",
        calc: "",
        a:0,
        b:0,
        previous: "",
        result: ""
    },

    Init(){
        this.calc= this.calc;
        this.result=this.result;
    },

    getPressedValue(e) {
        const val=this.$element(e.target.id);

        if(val.attr.id=="%" || val.attr.id=="*" || val.attr.id=="+" || val.attr.id=="-" || val.attr.id=="/" || val.attr.id=="power") {
            this.operator = val.attr.id;
            this.a = Number(this.previous);
            this.calc = this.previous + this.operator;
            this.previous="";
            this.result="";
        }
        else if(val.attr.id=="equalTo"){
            this.b=Number(this.previous);
            if(this.operator=="+"){
                this.result=this.a+this.b;
            }
            else if(this.operator=="-"){
                this.result=this.a-this.b;
            }
            else if(this.operator=="*"){
                this.result=Math.imul(this.a,this.b);
            }
            else if(this.operator=="/"){
                this.result=this.a/this.b;
            }
            else if(this.operator=="%"){
                this.result=this.a%this.b;
            }
            else if(this.operator=="power"){
                this.result=Math.pow(this.a,this.b);
            }
            this.previous=this.result;
            this.calc=this.a+this.operator+this.b;
        }
        else{
            if(val.attr.id=="ac"){
                this.previous="";
                this.result="";
                this.calc="";
            }
            else if(val.attr.id=="c") {
                this.result = "";
                this.calc=this.calc.substring(0,this.calc.length-1);
                this.previous=this.calc;
            }
            else {
                this.previous = this.previous + val.attr.value;
                this.calc=this.previous;
            }
            this.result="";
        }
    }

}
