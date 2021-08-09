let thumbnails = document.getElementsByClassName('thumbnail')

    let activeImages = document.getElementsByClassName('active')

    for(var i=0; i < thumbnails.length; i++){
      thumbnails[i].addEventListener('mouseover', function(){
        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
       console.log(activeImages);

        this.classList.add('active')
        document.getElementById('apresentacao').src = this.src
      })
    }


        let tamanho = document.getElementById('textProd')
        var opc1 = "38/39"
        const teste = function(){
            if(opc1 > 0){
                document.write(tamanho + opc1) 
            }
        }
             