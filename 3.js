
    function bmical() 
    {
        var weight=document.getElementById("weight").value;
        var height=document.getElementById("height").value;
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert("Please enter valid values for weight and height.");
            return;
        }
        var bmi = weight/ ((height/100)*(height/100));
        document.getElementById("numbercal").value = bmi.toFixed(2);
        var category;
        
        if (bmi<18) {
            category="underweight";
        }
        else if (bmi>18 && bmi<=25) {
            category="normalweight";
            
        }
        else if (bmi>25) {
            category="overweight";
        }
         else {
            category="invalid details"
         }  
         document.getElementById("textcal") .value=category;
        
        
        
    }