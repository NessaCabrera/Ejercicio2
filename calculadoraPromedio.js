let nota1;
        let nota2;
        let nota3;
        let nombre=prompt("Ingrese su Nombre");
        let materia= prompt("Ingrese Materia");
        let i=0, j=0, k=0;
        let promedio;
        
        while( i==0){

            nota1=parseFloat(prompt("Ingresar la primera nota"));
            if(isNaN (nota1)){
                i=0;
                alert("Ingrese un numero valido");
            }else{
                i=1;
            }
            if (nota1<0||nota1>10)
            {
                alert("Ingrese nota ente 0 y 10");
                i=0;                
            }
        }
        while(j==0){
            nota2=parseFloat(prompt("Ingresar la segunda nota"));
            if(isNaN (nota2)){
                j=0;
                alert("Ingrese un numero valido");
            }else{
                j=1;
            }
            if (nota2<0||nota2>10)
            {
                alert("Ingrese nota ente 0 y 10");
                j=0;                
            }
        }
        
        while(k==0){
            nota3=parseFloat(prompt("Ingresar la tercera nota"));
            if(isNaN (nota3)){
                k=0;
                alert("Ingrese un numero valido");
            }else{
                k=1;
            }
            if (nota3<0||nota3>10)
            {
                alert("Ingrese nota ente 0 y 10");
                k=0;                
            }
        }

        promedio=(nota1+nota2+nota3)/3;
        if(promedio>=7){
            alert(nombre+" ¡Felicidades! Has aprobado con un promedio de: "+promedio);
        }else{
            alert(nombre+" gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es: "+promedio)
        }
