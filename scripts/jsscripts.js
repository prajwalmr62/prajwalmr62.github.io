$('document').ready(function(){
    AddTransitionToSlides(["#8","#7","#6","#5",'#4','#3','#2','#1']);
    });


function AddTransitionToSlides(slideNameList){
    if(slideNameList!=undefined && slideNameList.length!=0)
    {
        slideName = slideNameList.pop();
        setTimeout(()=>{
            console.log(slideName);
            console.log(slideNameList);
            $(slideName).removeClass('hidden');
            $(slideName).addClass('visible');
            if(slideNameList.length>0){
            setTimeout(()=>{
                $(slideName).removeClass('visible');
                $(slideName).addClass('hidden');
                    AddTransitionToSlides(slideNameList);
            },3500);
            }
        },1000);
    }
}
