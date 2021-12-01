
export default {
    data: {
        operator: "",
        calc: "",
        a:0,
        b:0,
        aprevious: "",
        bprevious: "",
        previous: "",
        result: ""
    },

    Init(){
        this.calc= this.calc;
        this.result=this.result;
    },

    getPressedValue(e) {
        const val=this.$element(e.target.id);
        console.log("a"+this.a+"b"+this.b+"aprev"+this.aprevious+"bprev"+this.bprevious+"prev"+this.previous+"calc"+this.calc+"res"+this.result);

        if(val.attr.id=="%" || val.attr.id=="*" || val.attr.id=="+" || val.attr.id=="-" || val.attr.id=="/" || val.attr.id=="power") {
            this.operator = val.attr.id;
            this.a = Number(this.aprevious);
            if(this.result!==""){
                this.a = Number(this.result);
               this.calc=this.result+this.operator;
                this.bprevious="";
                this.b=0;
            }
            else{
                this.calc = this.aprevious + this.operator;
            }

            this.result="";

        }
        else if(val.attr.id=="equalTo"){
            this.b=Number(this.bprevious);
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
//            this.previous=this.calc;
            this.calc=this.a+this.operator+this.b;
        }
        else{
            if(val.attr.id=="ac"){
                this.previous="";
                this.aprevious="";
                this.bprevious="";
                this.result="";
                this.a=0;
                this.b=0;
                this.calc="";
                this.operator="";
            }
            else if(val.attr.id=="c") {
                if(this.result!==""){
                    this.result = "";
                }
                else{
                    this.calc=this.calc.substring(0,this.calc.length-1);
                }

                let i;
                for(i=0;i<this.calc.length;i++){
                    const sval=this.calc.charAt(i);
                    if(sval== "+" || sval== "-" || sval== "*" || sval== "/" || sval== "%" || sval== "power"){
                        this.operator=this.calc.charAt(i);
                        this.a=Number(this.calc.substring(0,i));
                        break;
                    }
                }
                let afteroper ="";
                for(let j=i+1;j<this.calc.length;j++){
                    afteroper+=this.calc.charAt(j);
                }
                if(afteroper.length>0){
                    this.bprevious=afteroper;
                }else{
                    this.bprevious="";
                    this.b=0;
                }
            }
            else {
                if(this.opertor!=="" && this.a>0 ) {
                    this.bprevious = this.bprevious + val.attr.value;
                    this.calc = this.a+this.operator+this.bprevious;
                }
                else if(this.operator===""){
                    this.aprevious = this.aprevious + val.attr.value;
                    this.calc = this.aprevious;
                }
                this.previous=this.calc;
            }
            this.result="";
        }
    }

}
