
let classes = ['banner', 'banner1', 'banner2', 'banner3'];
let lorem50= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, facilis natus ab quas dicta, culpa accusamus quidem corporis blanditiis quo, velit laborum. Ut architecto debitis esse quaerat, dolores illum, dolorem id natus omnis sapiente corporis fugiat eos possimus eius, perspiciatis ad hic eaque obcaecati? Repudiandae at quas ratione sint velit."
let contenEle=[
{heading: "we are professional web developers", para:lorem50},    
{heading: "We are known for the best", para:lorem50},
{ heading: "what we do",para: lorem50},
{heading: "timely delivery",para: lorem50},
]
let section= document.querySelector('#bans');
let slideOne= document.querySelector(".slide1");
let heading= slideOne.querySelector("#heading");
let para= slideOne.querySelector('#para');
let prevBtn= document.querySelector(".prev-btn");
let nextBtn= document.querySelector(".nxt-btn");
let count= 0;
function slider(){
section.classList.add(classes[count]);
let item= contenEle[count];
heading.textContent=item.heading;
para.textContent=item.para;
};
window.addEventListener('DOMContentLoaded', function(){
    slider();
});

prevBtn.addEventListener("click", function(){
    count--;
    if(count < 0){
        count=contenEle.length-1;
    }
    slider();
});
nextBtn.addEventListener("click", function(){
    count++;
    if(count > contenEle.length-1 || count > classes.length-1){
        count = 0;
    }
    slider();
 }); 
 let homeLinks = document.querySelector(".home");
// nav toggle
let button = document.querySelector(".nav-toggle");
let parentList = document.querySelector(".links"); 
button.addEventListener("click", function(){
     if(parentList.classList.contains("show-links")){
       parentList.classList.remove("show-links");
  }else {parentList.classList.add("show-links")
};

});
// first parent 
let links= document.querySelector(".links");
// second child
let abtList= links.querySelector(".abt-us");
// first child of second child(a with id= abt)
let abtLink= abtList.querySelector('#abt');
// child of a with id abt(which is ul of class sub-about1)
let subList= abtLink.nextElementSibling;
// second li in ul of sub-about1
let paren=subList.children[2];
// child of second li in ul of sub-about1
let mainSub= paren.querySelector("#mainsub");
// portfolios
let portfolios = links.querySelector(".portfolios");
// first child of second child(a with id main-port)
let mainPort= portfolios.querySelector("#main-port");
// child of a with id main-port(which is ul of class sub-about2)
let subAbout2= mainPort.nextElementSibling;
// second li in ul of sub-about2
let secondLi= subAbout2.children[2];
// child of second li in ul of sub-about2
let portf= secondLi.querySelector("#portf");









// home link
homeLinks.addEventListener("mouseenter", function(){
    subList.classList.add("sub-about1");
})

// About us event listener
abtLink.addEventListener("mouseenter", function(){
    subList.classList.remove("sub-about1");
    parentList.classList.add("show-links1");
    subAbout2.classList.add("sub-about2");
    });
    // when leaving the sub links
    mainSub.addEventListener("mouseleave", function(){
        parentList.classList.remove("show-links1");
        subList.classList.add("sub-about1");
        });
        // when leaving about us link
        abtLink.addEventListener("mouseleave", function(){
            parentList.classList.remove("show-links1");
        });

// portfolios event listener
mainPort.addEventListener("mouseenter", function(){
    subAbout2.classList.remove("sub-about2");
    parentList.classList.toggle("show-links1");
    subList.classList.add("sub-about1");
    });
    portf.addEventListener("mouseleave", function(){
        parentList.classList.remove("show-links1");
        subAbout2.classList.add("sub-about2");
        });

        let person = [
            {name: 'ade', job: 'developer'},
            {name: 'ade', job: 'designer'},
            {name: 'ade', job: 'programmer'}
        ];
 function getAverage(name, ...scores){
      let score =scores.reduce(function(total,item){total +=item;
    return total;},0);
       let average = score/scores.length;
       console.log(average);
        };
        getAverage(name,80,40,30,50)