console.log('sdafa')
let generateRandomWord = function(length = 8){
    let str = "implydummytextoftheprintingandtypesettingindustryLoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500swhenanunknownprintertookagalleyoftypeandscrambledittomakeatypespecimenbook"
    let s = '';
    for(let i = 0;i<length; i++){
        let n = Math.floor(Math.random()*186 + 1);
        s+=str.charAt(n)
    }
    return s;
} 
let generateRandoNmber = function(){
    let num = [1,2,3,4,5,6,7,8,9,0]
    let s = '';
    for(let i = 0;i<10; i++){
        let n = Math.floor(Math.random()*9 + 1);
        s+=num[n]
    }
    return s;
}   
$('body').find('form').each(function(){
    $(this).find('input').each(function(){
        switch($(this).attr('type')){
            case 'text':
                if($(this).attr('name').match(/phone/)){
                    $(this).val(generateRandoNmber())
                }else{
                    $(this).val(generateRandomWord(8))
                }
                break;
            case 'email': 
                $(this).val(generateRandomWord(5)+ '.' + generateRandomWord(4) + '@gmail.com');
        }
    });
})